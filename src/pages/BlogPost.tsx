import React, { useState } from 'react';
import { Calendar, Clock, Eye, Share2, BookmarkPlus, MessageCircle, ThumbsUp, Facebook, Twitter, Linkedin } from 'lucide-react';
import { blogPosts } from '../data/mockData';

const BlogPost: React.FC = () => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [likes, setLikes] = useState(128);
  const [isLiked, setIsLiked] = useState(false);
  const [comments, setComments] = useState([
    {
      id: 1,
      author: 'John Smith',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100',
      content: 'Great analysis! I completely agree with your take on the championship contenders.',
      timestamp: '2 hours ago',
      likes: 12
    },
    {
      id: 2,
      author: 'Maria Garcia',
      avatar: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=100',
      content: 'The Bills definitely have a strong roster this year. Can\'t wait to see how they perform!',
      timestamp: '4 hours ago',
      likes: 8
    }
  ]);
  const [newComment, setNewComment] = useState('');

  // For demo, we'll use the first blog post
  const post = blogPosts[0];

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
  };

  const handleComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      const comment = {
        id: comments.length + 1,
        author: 'Current User',
        avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=100',
        content: newComment,
        timestamp: 'Just now',
        likes: 0
      };
      setComments([comment, ...comments]);
      setNewComment('');
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const relatedPosts = blogPosts.filter(p => p.id !== post.id && p.category === post.category).slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Image */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        <div className="absolute bottom-8 left-0 right-0">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <span className="inline-block px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-full mb-4">
                {post.category}
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                {post.title}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-6 mb-8 p-6 bg-gray-50 rounded-2xl">
              <div className="flex items-center space-x-3">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-semibold text-gray-900">{post.author.name}</p>
                  <p className="text-sm text-gray-600">Sports Journalist</p>
                </div>
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Calendar size={16} />
                  <span>{formatDate(post.publishedAt)}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock size={16} />
                  <span>{post.readTime} min read</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Eye size={16} />
                  <span>{post.views?.toLocaleString()} views</span>
                </div>
              </div>
            </div>

            {/* Social Actions */}
            <div className="flex items-center justify-between mb-8 p-4 bg-gray-50 rounded-2xl">
              <div className="flex items-center space-x-4">
                <button
                  onClick={handleLike}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-colors ${
                    isLiked ? 'bg-red-100 text-red-600' : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <ThumbsUp size={16} className={isLiked ? 'fill-current' : ''} />
                  <span>{likes}</span>
                </button>
                <button
                  onClick={() => setIsBookmarked(!isBookmarked)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-colors ${
                    isBookmarked ? 'bg-blue-100 text-blue-600' : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <BookmarkPlus size={16} className={isBookmarked ? 'fill-current' : ''} />
                  <span>{isBookmarked ? 'Saved' : 'Save'}</span>
                </button>
              </div>
              
              <div className="flex items-center space-x-2">
                <span className="text-gray-600 text-sm mr-2">Share:</span>
                <button className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                  <Facebook size={16} />
                </button>
                <button className="p-2 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition-colors">
                  <Twitter size={16} />
                </button>
                <button className="p-2 bg-blue-800 text-white rounded-full hover:bg-blue-900 transition-colors">
                  <Linkedin size={16} />
                </button>
                <button className="p-2 bg-gray-600 text-white rounded-full hover:bg-gray-700 transition-colors">
                  <Share2 size={16} />
                </button>
              </div>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 font-medium mb-8 leading-relaxed">
                {post.excerpt}
              </p>
              
              <div className="text-gray-700 leading-relaxed space-y-6">
                {post.content.split('\n\n').map((paragraph, index) => {
                  if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                    return (
                      <h3 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                        {paragraph.replace(/\*\*/g, '')}
                      </h3>
                    );
                  }
                  return (
                    <p key={index} className="mb-6">
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <button
                    key={tag}
                    className="px-4 py-2 bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-700 rounded-full text-sm transition-colors"
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Author Bio */}
            <div className="mt-12 p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl">
              <div className="flex items-start space-x-6">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-20 h-20 rounded-full"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{post.author.name}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{post.author.bio}</p>
                  <div className="flex space-x-3">
                    {post.author.social.twitter && (
                      <a href={`https://twitter.com/${post.author.social.twitter}`} className="text-blue-500 hover:text-blue-600">
                        Twitter
                      </a>
                    )}
                    {post.author.social.linkedin && (
                      <a href={`https://linkedin.com/in/${post.author.social.linkedin}`} className="text-blue-700 hover:text-blue-800">
                        LinkedIn
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Comments Section */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <MessageCircle className="mr-3" />
                Comments ({comments.length})
              </h3>

              {/* Comment Form */}
              <form onSubmit={handleComment} className="mb-8">
                <div className="mb-4">
                  <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Share your thoughts on this article..."
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
                >
                  Post Comment
                </button>
              </form>

              {/* Comments List */}
              <div className="space-y-6">
                {comments.map((comment) => (
                  <div key={comment.id} className="bg-gray-50 rounded-2xl p-6">
                    <div className="flex items-start space-x-4">
                      <img
                        src={comment.avatar}
                        alt={comment.author}
                        className="w-12 h-12 rounded-full"
                      />
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h4 className="font-semibold text-gray-900">{comment.author}</h4>
                          <span className="text-sm text-gray-500">{comment.timestamp}</span>
                        </div>
                        <p className="text-gray-700 mb-3 leading-relaxed">{comment.content}</p>
                        <button className="flex items-center space-x-2 text-sm text-gray-500 hover:text-blue-600 transition-colors">
                          <ThumbsUp size={14} />
                          <span>{comment.likes}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              {/* Related Posts */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Related Articles</h3>
                <div className="space-y-4">
                  {relatedPosts.map((relatedPost) => (
                    <div key={relatedPost.id} className="group cursor-pointer">
                      <div className="flex space-x-3 p-3 hover:bg-gray-50 rounded-xl transition-colors">
                        <img
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          className="w-16 h-16 object-cover rounded-lg group-hover:scale-105 transition-transform"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-sm text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-tight">
                            {relatedPost.title}
                          </h4>
                          <div className="flex items-center space-x-2 mt-2 text-xs text-gray-500">
                            <Clock size={12} />
                            <span>{relatedPost.readTime} min</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 text-white text-center">
                <h3 className="text-xl font-bold mb-3">Stay Updated</h3>
                <p className="text-blue-100 text-sm mb-4">Get our latest sports analysis delivered to your inbox</p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter email"
                    className="w-full px-4 py-3 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                  />
                  <button className="w-full bg-white text-blue-600 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>

              {/* Ad Space */}
              <div className="bg-gray-900 rounded-2xl p-6 text-white text-center">
                <h4 className="text-lg font-bold mb-2">Advertisement</h4>
                <div className="bg-gray-800 rounded-lg h-48 flex items-center justify-center mb-4">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🏆</div>
                    <p className="text-sm text-gray-400">Premium Sports Gear</p>
                  </div>
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;