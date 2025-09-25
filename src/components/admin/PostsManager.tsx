import React, { useState } from 'react';
import AdminLayout from './AdminLayout';
import PostEditor from './PostEditor';
import { BlogPostForm } from '../../types/admin';
import { blogPosts } from '../../data/mockData';
import { 
  Plus, 
  Search, 
  Filter, 
  Edit, 
  Trash2, 
  Eye, 
  MoreHorizontal,
  Calendar,
  User
} from 'lucide-react';

const PostsManager: React.FC = () => {
  const [view, setView] = useState<'list' | 'edit' | 'create'>('list');
  const [selectedPost, setSelectedPost] = useState<BlogPostForm | undefined>();
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'published' | 'draft' | 'archived'>('all');
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const handleCreatePost = () => {
    setSelectedPost(undefined);
    setView('create');
  };

  const handleEditPost = (post: any) => {
    const formPost: BlogPostForm = {
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      image: post.image,
      category: post.category,
      tags: post.tags,
      authorId: '1',
      featured: post.featured || false,
      trending: post.trending || false,
      status: 'published',
      seo: {
        metaTitle: post.title,
        metaDescription: post.excerpt,
        keywords: post.tags,
        slug: post.title.toLowerCase().replace(/\s+/g, '-')
      }
    };
    setSelectedPost(formPost);
    setView('edit');
  };

  const handleSavePost = (post: BlogPostForm) => {
    console.log('Saving post:', post);
    // In a real app, this would save to your backend
    setView('list');
  };

  const handleDeletePost = (postId: string) => {
    if (confirm('Are you sure you want to delete this post?')) {
      console.log('Deleting post:', postId);
      // In a real app, this would delete from your backend
    }
  };

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = filterCategory === 'all' || post.category === filterCategory;
    // For demo purposes, treating all posts as published
    const matchesStatus = filterStatus === 'all' || filterStatus === 'published';
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

  if (view === 'edit' || view === 'create') {
    return (
      <AdminLayout currentPage="posts">
        <PostEditor
          post={selectedPost}
          onSave={handleSavePost}
          onCancel={() => setView('list')}
        />
      </AdminLayout>
    );
  }

  return (
    <AdminLayout currentPage="posts">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Posts</h1>
            <p className="text-gray-600 mt-2">Manage your blog posts and content</p>
          </div>
          <button
            onClick={handleCreatePost}
            className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Plus size={20} />
            <span>Create Post</span>
          </button>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value as any)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Status</option>
              <option value="published">Published</option>
              <option value="draft">Draft</option>
              <option value="archived">Archived</option>
            </select>

            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Categories</option>
              <option value="Football">Football</option>
              <option value="Basketball">Basketball</option>
              <option value="Athletics">Athletics</option>
              <option value="Soccer">Soccer</option>
              <option value="Tennis">Tennis</option>
            </select>

            <button className="flex items-center justify-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Filter size={16} />
              <span>More Filters</span>
            </button>
          </div>
        </div>

        {/* Posts List */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left py-4 px-6 font-medium text-gray-900">Post</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-900">Category</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-900">Author</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-900">Status</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-900">Views</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-900">Date</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-900">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredPosts.map((post) => (
                  <tr key={post.id} className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-4">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div className="min-w-0 flex-1">
                          <h3 className="text-sm font-medium text-gray-900 truncate">
                            {post.title}
                          </h3>
                          <p className="text-sm text-gray-500 truncate mt-1">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center space-x-2 mt-2">
                            {post.featured && (
                              <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded-full">
                                Featured
                              </span>
                            )}
                            {post.trending && (
                              <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                                Trending
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                        {post.category}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-2">
                        <img
                          src={post.author.avatar}
                          alt={post.author.name}
                          className="w-8 h-8 rounded-full"
                        />
                        <span className="text-sm text-gray-900">{post.author.name}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                        Published
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-1 text-sm text-gray-600">
                        <Eye size={14} />
                        <span>{post.views?.toLocaleString()}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-1 text-sm text-gray-600">
                        <Calendar size={14} />
                        <span>{post.publishedAt}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => handleEditPost(post)}
                          className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                          title="Edit post"
                        >
                          <Edit size={16} />
                        </button>
                        <button
                          onClick={() => window.open(`/blog/${post.id}`, '_blank')}
                          className="p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                          title="View post"
                        >
                          <Eye size={16} />
                        </button>
                        <button
                          onClick={() => handleDeletePost(post.id)}
                          className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          title="Delete post"
                        >
                          <Trash2 size={16} />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                          <MoreHorizontal size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">1</span> to <span className="font-medium">{filteredPosts.length}</span> of{' '}
            <span className="font-medium">{filteredPosts.length}</span> results
          </p>
          <div className="flex items-center space-x-2">
            <button className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              Previous
            </button>
            <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg">
              1
            </button>
            <button className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              Next
            </button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default PostsManager;