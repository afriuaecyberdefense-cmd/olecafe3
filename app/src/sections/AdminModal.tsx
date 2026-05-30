import { useState, useCallback } from 'react';
import { X, LogIn, LogOut, Plus, Trash2, AlertCircle, ChevronDown, ChevronUp } from 'lucide-react';
import type { MenuItem, Category } from '../types/menu';
import { CATEGORY_CONFIG } from '../data/menuData';

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
  isAuthenticated: boolean;
  onLogin: (password: string) => boolean;
  onLogout: () => void;
  items: MenuItem[];
  onAddItem: (item: MenuItem) => void;
  onDeleteItem: (id: string) => void;
}

export default function AdminModal({
  isOpen,
  onClose,
  isAuthenticated,
  onLogin,
  onLogout,
  items,
  onAddItem,
  onDeleteItem,
}: AdminModalProps) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState<'add' | 'manage'>('add');
  const [collapsedCategories, setCollapsedCategories] = useState<Record<string, boolean>>({});

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: 'hot-drinks' as Category,
    imageUrl: '' as string,
  });

  const [success, setSuccess] = useState('');

  const handleLogin = useCallback(() => {
    setError('');
    if (!password.trim()) {
      setError('Please enter password');
      return;
    }
    const result = onLogin(password);
    if (!result) {
      setError('Invalid password');
      setPassword('');
    }
  }, [password, onLogin]);

  const handleSubmit = useCallback(() => {
    setSuccess('');
    setError('');

    if (!formData.name.trim()) {
      setError('Item name is required');
      return;
    }
    if (!formData.price || isNaN(Number(formData.price)) || Number(formData.price) < 0) {
      setError('Valid price is required');
      return;
    }

    const newItem: MenuItem = {
      id: `custom-${Date.now()}`,
      name: formData.name.trim(),
      description: formData.description.trim(),
      price: Number(formData.price),
      category: formData.category,
      ...(formData.imageUrl ? { imageUrl: formData.imageUrl } : {}),
    };

    onAddItem(newItem);
    setFormData({ name: '', description: '', price: '', category: 'hot-drinks' as Category, imageUrl: '' as string });
    setSuccess('Item added successfully!');
    setTimeout(() => setSuccess(''), 3000);
  }, [formData, onAddItem]);

  const handleDelete = useCallback((id: string) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      onDeleteItem(id);
    }
  }, [onDeleteItem]);

  const toggleCategory = (categoryId: string) => {
    setCollapsedCategories((prev) => ({
      ...prev,
      [categoryId]: !prev[categoryId],
    }));
  };

  // Group items by category
  const groupedItems = CATEGORY_CONFIG.map((cat) => ({
    ...cat,
    items: items.filter((item) => item.category === cat.id),
  }));

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#2C1810]/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[85vh] overflow-hidden animate-fade-in-scale">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-custom">
          <h2 className="font-brand text-burgundy text-xl font-semibold">Admin Panel</h2>
          <div className="flex items-center gap-2">
            {isAuthenticated && (
              <button
                onClick={onLogout}
                className="flex items-center gap-1.5 text-text-secondary text-xs hover:text-burgundy transition-colors px-2 py-1 rounded-lg hover:bg-burgundy/5"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            )}
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-cream flex items-center justify-center text-text-secondary hover:text-burgundy hover:bg-burgundy/10 transition-all active:scale-95"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(85vh-64px)]">
          {!isAuthenticated ? (
            /* Login Form */
            <div className="p-6">
              <div className="text-center mb-6">
                <div className="w-14 h-14 rounded-full bg-burgundy/10 flex items-center justify-center mx-auto mb-3">
                  <LogIn className="w-6 h-6 text-burgundy" />
                </div>
                <p className="text-text-secondary text-sm">Enter admin password to continue</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-text-primary text-sm font-medium mb-1.5">
                    Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setError('');
                    }}
                    onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
                    placeholder="Enter password"
                    className="w-full h-12 px-4 rounded-xl border border-custom bg-cream/50 text-text-primary text-sm placeholder:text-text-secondary/40 focus:outline-none focus:border-burgundy focus:ring-2 focus:ring-burgundy/10 transition-all"
                    autoFocus
                  />
                </div>

                {error && (
                  <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 px-3 py-2 rounded-lg">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <button
                  onClick={handleLogin}
                  className="w-full h-12 bg-burgundy text-white font-medium text-sm uppercase tracking-wider rounded-xl hover:bg-burgundy-dark transition-colors active:scale-[0.97]"
                >
                  Login
                </button>
              </div>
            </div>
          ) : (
            /* Admin Dashboard */
            <div>
              {/* Tabs */}
              <div className="flex border-b border-custom px-5">
                <button
                  onClick={() => setActiveTab('add')}
                  className={`flex-1 py-3 text-sm font-medium transition-all relative ${
                    activeTab === 'add'
                      ? 'text-burgundy'
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  Add Item
                  {activeTab === 'add' && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-burgundy rounded-full" />
                  )}
                </button>
                <button
                  onClick={() => setActiveTab('manage')}
                  className={`flex-1 py-3 text-sm font-medium transition-all relative ${
                    activeTab === 'manage'
                      ? 'text-burgundy'
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  Manage ({items.length})
                  {activeTab === 'manage' && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-burgundy rounded-full" />
                  )}
                </button>
              </div>

              {/* Add Item Tab */}
              {activeTab === 'add' && (
                <div className="p-5 space-y-4">
                  {success && (
                    <div className="text-green-700 text-sm bg-green-50 px-3 py-2 rounded-lg text-center">
                      {success}
                    </div>
                  )}

                  {error && (
                    <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 px-3 py-2 rounded-lg">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  <div>
                    <label className="block text-text-primary text-sm font-medium mb-1.5">
                      Category
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, category: e.target.value as Category }))
                      }
                      className="w-full h-12 px-4 rounded-xl border border-custom bg-cream/50 text-text-primary text-sm focus:outline-none focus:border-burgundy focus:ring-2 focus:ring-burgundy/10 transition-all appearance-none"
                    >
                      {CATEGORY_CONFIG.map((cat) => (
                        <option key={cat.id} value={cat.id}>
                          {cat.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-text-primary text-sm font-medium mb-1.5">
                      Item Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, name: e.target.value }))
                      }
                      placeholder="e.g., Spanish Latte"
                      className="w-full h-12 px-4 rounded-xl border border-custom bg-cream/50 text-text-primary text-sm placeholder:text-text-secondary/40 focus:outline-none focus:border-burgundy focus:ring-2 focus:ring-burgundy/10 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-text-primary text-sm font-medium mb-1.5">
                      Description
                    </label>
                    <textarea
                      value={formData.description}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, description: e.target.value }))
                      }
                      placeholder="Brief description of the item"
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl border border-custom bg-cream/50 text-text-primary text-sm placeholder:text-text-secondary/40 focus:outline-none focus:border-burgundy focus:ring-2 focus:ring-burgundy/10 transition-all resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-text-primary text-sm font-medium mb-1.5">
                      Price (AED) *
                    </label>
                    <input
                      type="number"
                      value={formData.price}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, price: e.target.value }))
                      }
                      placeholder="e.g., 28"
                      min="0"
                      step="1"
                      className="w-full h-12 px-4 rounded-xl border border-custom bg-cream/50 text-text-primary text-sm placeholder:text-text-secondary/40 focus:outline-none focus:border-burgundy focus:ring-2 focus:ring-burgundy/10 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-text-primary text-sm font-medium mb-1.5">
                      Item Image
                    </label>

                    <div className="text-xs text-text-secondary bg-cream/50 border border-custom/50 rounded-xl px-3 py-2">
                      Item images are locked and cannot be changed.
                    </div>
                  </div>

                  <button

                    onClick={handleSubmit}
                    className="w-full h-12 bg-champagne text-burgundy-dark font-semibold text-sm rounded-xl hover:bg-champagne-light transition-colors active:scale-[0.97] flex items-center justify-center gap-2"
                  >
                    <Plus className="w-4 h-4" />
                    Add Item
                  </button>
                </div>
              )}

              {/* Manage Items Tab */}
              {activeTab === 'manage' && (
                <div className="p-5">
                  {items.length === 0 ? (
                    <div className="text-center py-8 text-text-secondary text-sm">
                      No items to manage.
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {groupedItems.map((group) => (
                        <div key={group.id} className="border border-custom rounded-xl overflow-hidden">
                          <button
                            onClick={() => toggleCategory(group.id)}
                            className="w-full flex items-center justify-between px-4 py-3 bg-cream/50 hover:bg-cream transition-colors"
                          >
                            <span className="text-sm font-semibold text-text-primary">
                              {group.label}
                            </span>
                            <div className="flex items-center gap-2">
                              <span className="text-xs text-text-secondary bg-white px-2 py-0.5 rounded-full">
                                {group.items.length}
                              </span>
                              {collapsedCategories[group.id] ? (
                                <ChevronDown className="w-4 h-4 text-text-secondary" />
                              ) : (
                                <ChevronUp className="w-4 h-4 text-text-secondary" />
                              )}
                            </div>
                          </button>

                          {!collapsedCategories[group.id] && (
                            <div className="divide-y divide-custom/50">
                              {group.items.map((item) => (
                                <div
                                  key={item.id}
                                  className="flex items-center justify-between px-4 py-3 hover:bg-cream/30 transition-colors"
                                >
                                  <div className="min-w-0 flex-1 mr-3">
                                    <p className="text-sm text-text-primary truncate">
                                      {item.name}
                                    </p>
                                    {item.imageUrl ? (
                                      <img
                                        src={item.imageUrl}
                                        alt={item.name}
                                        className="w-10 h-10 rounded-lg object-cover border border-custom bg-cream/50 mt-2"
                                      />
                                    ) : (
                                      <div className="w-10 h-10 rounded-lg border border-dashed border-custom bg-cream/40 mt-2" />
                                    )}
                                    <p className="text-xs text-burgundy font-semibold mt-2">
                                      AED {item.price}
                                    </p>
                                  </div>
                                  <button
                                    onClick={() => handleDelete(item.id)}
                                    className="w-8 h-8 rounded-lg flex items-center justify-center text-text-secondary hover:text-red-600 hover:bg-red-50 transition-all active:scale-95 flex-shrink-0"
                                    title="Delete item"
                                  >
                                    <Trash2 className="w-4 h-4" />
                                  </button>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
