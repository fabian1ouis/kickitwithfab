import React from 'react';
import AdminLayout from './AdminLayout';
import { 
  FileText, 
  Eye, 
  MessageCircle, 
  TrendingUp, 
  Users, 
  Calendar,
  ArrowUp,
  ArrowDown
} from 'lucide-react';
import { blogPosts } from '../../data/mockData';

const AdminDashboard: React.FC = () => {
  const stats = [
    {
      name: 'Total Posts',
      value: blogPosts.length,
      change: '+12%',
      changeType: 'increase',
      icon: FileText,
      color: 'bg-blue-500'
    },
    {
      name: 'Total Views',
      value: '45.2K',
      change: '+18%',
      changeType: 'increase',
      icon: Eye,
      color: 'bg-green-500'
    },
    {
      name: 'Comments',
      value: '1,234',
      change: '+8%',
      changeType: 'increase',
      icon: MessageCircle,
      color: 'bg-purple-500'
    },
    {
      name: 'Subscribers',
      value: '2,847',
      change: '-2%',
      changeType: 'decrease',
      icon: Users,
      color: 'bg-orange-500'
    }
  ];

  const recentPosts = blogPosts.slice(0, 5);

  return (
    <AdminLayout currentPage="dashboard">
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-2">Welcome back! Here's what's happening with your blog.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.name} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                </div>
                <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="flex items-center mt-4">
                {stat.changeType === 'increase' ? (
                  <ArrowUp className="w-4 h-4 text-green-500 mr-1" />
                ) : (
                  <ArrowDown className="w-4 h-4 text-red-500 mr-1" />
                )}
                <span className={`text-sm font-medium ${
                  stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.change}
                </span>
                <span className="text-sm text-gray-500 ml-1">from last month</span>
              </div>
            </div>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Posts */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900">Recent Posts</h2>
                <a href="/admin/posts" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  View all
                </a>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {recentPosts.map((post) => (
                  <div key={post.id} className="flex items-center space-x-4 p-4 hover:bg-gray-50 rounded-lg transition-colors">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-medium text-gray-900 truncate">
                        {post.title}
                      </h3>
                      <div className="flex items-center space-x-4 mt-1 text-xs text-gray-500">
                        <span>{post.category}</span>
                        <span>•</span>
                        <span>{post.views?.toLocaleString()} views</span>
                        <span>•</span>
                        <span>{post.publishedAt}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        post.featured ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                      }`}>
                        {post.featured ? 'Published' : 'Draft'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions & Analytics */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                  Create New Post
                </button>
                <button className="w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                  View Analytics
                </button>
                <button className="w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                  Manage Categories
                </button>
              </div>
            </div>

            {/* Top Categories */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Top Categories</h2>
              <div className="space-y-3">
                {['Football', 'Basketball', 'Athletics', 'Soccer'].map((category, index) => (
                  <div key={category} className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">{category}</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-16 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{ width: `${100 - (index * 20)}%` }}
                        />
                      </div>
                      <span className="text-xs text-gray-500">{100 - (index * 20)}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Recent Activity</h2>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">New comment on "NFL Season Preview"</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Post published: "NBA Trade Deadline"</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">New subscriber joined</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Draft saved: "Olympic Athletics"</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;