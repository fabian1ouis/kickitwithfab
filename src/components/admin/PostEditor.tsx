import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { BlogPostForm, SEOData } from '../../types/admin';
import { categories } from '../../data/mockData';
import { 
  Save, 
  Eye, 
  Globe, 
  Image, 
  Tag, 
  Calendar,
  User,
  Settings,
  X,
  Plus
} from 'lucide-react';

interface PostEditorProps {
  post?: BlogPostForm;
  onSave: (post: BlogPostForm) => void;
  onCancel: () => void;
}

const PostEditor: React.FC<PostEditorProps> = ({ post, onSave, onCancel }) => {
  const [activeTab, setActiveTab] = useState<'content' | 'seo' | 'settings'>('content');
  const [tags, setTags] = useState<string[]>(post?.tags || []);
  const [newTag, setNewTag] = useState('');
  const [previewMode, setPreviewMode] = useState(false);

  const { control, handleSubmit, watch, setValue, formState: { errors } } = useForm<BlogPostForm>({
    defaultValues: post || {
      title: '',
      excerpt: '',
      content: '',
      image: '',
      category: '',
      tags: [],
      authorId: '1',
      featured: false,
      trending: false,
      status: 'draft',
      seo: {
        metaTitle: '',
        metaDescription: '',
        keywords: [],
        slug: ''
      }
    }
  });

  const watchTitle = watch('title');

  // Auto-generate slug from title
  useEffect(() => {
    if (watchTitle && !post) {
      const slug = watchTitle
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .trim();
      setValue('seo.slug', slug);
    }
  }, [watchTitle, setValue, post]);

  const addTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      const updatedTags = [...tags, newTag.trim()];
      setTags(updatedTags);
      setValue('tags', updatedTags);
      setNewTag('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    const updatedTags = tags.filter(tag => tag !== tagToRemove);
    setTags(updatedTags);
    setValue('tags', updatedTags);
  };

  const onSubmit = (data: BlogPostForm) => {
    onSave({ ...data, tags });
  };

  const tabs = [
    { id: 'content', name: 'Content', icon: Globe },
    { id: 'seo', name: 'SEO', icon: Settings },
    { id: 'settings', name: 'Settings', icon: User }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Header */}
        <div className="bg-white rounded-t-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {post ? 'Edit Post' : 'Create New Post'}
              </h1>
              <p className="text-gray-600 mt-1">
                {post ? 'Make changes to your existing post' : 'Write and publish a new blog post'}
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <button
                type="button"
                onClick={() => setPreviewMode(!previewMode)}
                className="flex items-center space-x-2 px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              >
                <Eye size={16} />
                <span>Preview</span>
              </button>
              <button
                type="button"
                onClick={onCancel}
                className="flex items-center space-x-2 px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              >
                <X size={16} />
                <span>Cancel</span>
              </button>
              <button
                type="submit"
                className="flex items-center space-x-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Save size={16} />
                <span>Save Post</span>
              </button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white border-l border-r border-gray-200">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <tab.icon size={16} />
                  <span>{tab.name}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white border border-gray-200 rounded-b-xl">
          {activeTab === 'content' && (
            <div className="p-6 space-y-6">
              {/* Title */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Post Title *
                </label>
                <Controller
                  name="title"
                  control={control}
                  rules={{ required: 'Title is required' }}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter an engaging title for your post"
                    />
                  )}
                />
                {errors.title && (
                  <p className="mt-1 text-sm text-red-600">{errors.title.message}</p>
                )}
              </div>

              {/* Excerpt */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Excerpt *
                </label>
                <Controller
                  name="excerpt"
                  control={control}
                  rules={{ required: 'Excerpt is required' }}
                  render={({ field }) => (
                    <textarea
                      {...field}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="Write a compelling excerpt that summarizes your post"
                    />
                  )}
                />
                {errors.excerpt && (
                  <p className="mt-1 text-sm text-red-600">{errors.excerpt.message}</p>
                )}
              </div>

              {/* Featured Image */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Featured Image URL *
                </label>
                <Controller
                  name="image"
                  control={control}
                  rules={{ required: 'Featured image is required' }}
                  render={({ field }) => (
                    <div className="space-y-3">
                      <input
                        {...field}
                        type="url"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="https://images.pexels.com/..."
                      />
                      {field.value && (
                        <div className="relative">
                          <img
                            src={field.value}
                            alt="Preview"
                            className="w-full h-48 object-cover rounded-lg"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                            }}
                          />
                        </div>
                      )}
                    </div>
                  )}
                />
                {errors.image && (
                  <p className="mt-1 text-sm text-red-600">{errors.image.message}</p>
                )}
              </div>

              {/* Content */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Content *
                </label>
                <Controller
                  name="content"
                  control={control}
                  rules={{ required: 'Content is required' }}
                  render={({ field }) => (
                    <textarea
                      {...field}
                      rows={20}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none font-mono text-sm"
                      placeholder="Write your post content here. You can use markdown formatting."
                    />
                  )}
                />
                {errors.content && (
                  <p className="mt-1 text-sm text-red-600">{errors.content.message}</p>
                )}
              </div>

              {/* Category and Tags */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category *
                  </label>
                  <Controller
                    name="category"
                    control={control}
                    rules={{ required: 'Category is required' }}
                    render={({ field }) => (
                      <select
                        {...field}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select a category</option>
                        {categories.map((category) => (
                          <option key={category.id} value={category.name}>
                            {category.name}
                          </option>
                        ))}
                      </select>
                    )}
                  />
                  {errors.category && (
                    <p className="mt-1 text-sm text-red-600">{errors.category.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tags
                  </label>
                  <div className="space-y-3">
                    <div className="flex space-x-2">
                      <input
                        type="text"
                        value={newTag}
                        onChange={(e) => setNewTag(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Add a tag"
                      />
                      <button
                        type="button"
                        onClick={addTag}
                        className="px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                    {tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                          >
                            {tag}
                            <button
                              type="button"
                              onClick={() => removeTag(tag)}
                              className="ml-2 text-blue-600 hover:text-blue-800"
                            >
                              <X size={12} />
                            </button>
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'seo' && (
            <div className="p-6 space-y-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="text-sm font-medium text-blue-800 mb-2">SEO Optimization</h3>
                <p className="text-sm text-blue-700">
                  Optimize your post for search engines to improve visibility and ranking.
                </p>
              </div>

              {/* SEO Title */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  SEO Title
                </label>
                <Controller
                  name="seo.metaTitle"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="SEO-optimized title (leave blank to use post title)"
                    />
                  )}
                />
                <p className="mt-1 text-xs text-gray-500">
                  Recommended: 50-60 characters
                </p>
              </div>

              {/* Meta Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Meta Description
                </label>
                <Controller
                  name="seo.metaDescription"
                  control={control}
                  render={({ field }) => (
                    <textarea
                      {...field}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="Brief description for search engines"
                    />
                  )}
                />
                <p className="mt-1 text-xs text-gray-500">
                  Recommended: 150-160 characters
                </p>
              </div>

              {/* URL Slug */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  URL Slug
                </label>
                <Controller
                  name="seo.slug"
                  control={control}
                  render={({ field }) => (
                    <div className="flex">
                      <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                        kickitwithfab.com/blog/
                      </span>
                      <input
                        {...field}
                        type="text"
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="url-friendly-slug"
                      />
                    </div>
                  )}
                />
              </div>

              {/* Keywords */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Focus Keywords
                </label>
                <Controller
                  name="seo.keywords"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="sports, football, NFL (comma-separated)"
                    />
                  )}
                />
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="p-6 space-y-6">
              {/* Post Status */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Post Status
                </label>
                <Controller
                  name="status"
                  control={control}
                  render={({ field }) => (
                    <select
                      {...field}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="draft">Draft</option>
                      <option value="published">Published</option>
                      <option value="archived">Archived</option>
                    </select>
                  )}
                />
              </div>

              {/* Post Options */}
              <div className="space-y-4">
                <div className="flex items-center">
                  <Controller
                    name="featured"
                    control={control}
                    render={({ field }) => (
                      <input
                        {...field}
                        type="checkbox"
                        checked={field.value}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                    )}
                  />
                  <label className="ml-3 text-sm text-gray-700">
                    Featured Post
                    <p className="text-xs text-gray-500">Display this post prominently on the homepage</p>
                  </label>
                </div>

                <div className="flex items-center">
                  <Controller
                    name="trending"
                    control={control}
                    render={({ field }) => (
                      <input
                        {...field}
                        type="checkbox"
                        checked={field.value}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                    )}
                  />
                  <label className="ml-3 text-sm text-gray-700">
                    Trending Post
                    <p className="text-xs text-gray-500">Include in trending stories section</p>
                  </label>
                </div>
              </div>

              {/* Author */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Author
                </label>
                <Controller
                  name="authorId"
                  control={control}
                  render={({ field }) => (
                    <select
                      {...field}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="1">Mike Johnson</option>
                      <option value="2">Sarah Williams</option>
                      <option value="3">David Chen</option>
                    </select>
                  )}
                />
              </div>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default PostEditor;