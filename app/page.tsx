import Link from 'next/link'
    import ThemeToggle from './components/ThemeToggle'
    import { Button } from '@/components/ui/button'
    import { User, LogIn, Menu, Star, HelpCircle, MessageSquare, Check } from 'lucide-react'

    export default function Home() {
      return (
        <div className="min-h-screen">
          {/* Navbar */}
          <nav className="fixed top-0 left-0 right-0 shadow-md z-50 navbar">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex items-center">
                  {/* Logo */}
                  <div className="flex-shrink-0">
                    <Menu className="h-8 w-8 text-gray-700 dark:text-gray-300" />
                  </div>
                  {/* Links */}
                  <div className="hidden md:flex md:space-x-8 md:ml-10">
                    <Link href="#" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Features</Link>
                    <Link href="#" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Pricing</Link>
                    <Link href="#" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Contact</Link>
                  </div>
                </div>
                {/* Right Side */}
                <div className="flex items-center space-x-4">
                  <ThemeToggle />
                  <div className="flex space-x-4">
                    <Button variant="ghost" className="flex items-center gap-2">
                      <LogIn className="h-4 w-4" />
                      Sign in
                    </Button>
                    <Button className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      Sign up
                    </Button>
                  </div>
                  {/* Avatar */}
                  <div className="ml-4">
                    <User className="h-8 w-8 text-gray-700 dark:text-gray-300" />
                  </div>
                </div>
              </div>
            </div>
          </nav>

          {/* Main Content */}
          <main className="pt-16">
            {/* Hero Section */}
            <section className="h-screen bg-gray-100 dark:bg-gray-700">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
                <div className="text-center">
                  <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Welcome to Our Platform</h1>
                  <p className="text-gray-600 dark:text-gray-300 mb-8">Discover the best solutions for your business needs</p>
                  <div className="space-x-4">
                    <Button className="flex items-center gap-2">
                      Get Started
                      <Check className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" className="flex items-center gap-2">
                      Learn More
                      <HelpCircle className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </section>

            {/* Pricing Section */}
            <section className="py-20 bg-white dark:bg-gray-800">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Pricing Plans</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {['Basic', 'Pro', 'Enterprise'].map((plan, i) => (
                    <div key={i} className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                        <Star className="h-5 w-5" />
                        {plan} Plan
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-6">Perfect for {plan.toLowerCase()} users</p>
                      <Button className="w-full">Choose Plan</Button>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 bg-gray-100 dark:bg-gray-700">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">What Our Users Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                      <p className="text-gray-600 dark:text-gray-300 mb-4">"This platform has transformed our business operations!"</p>
                      <div className="flex items-center">
                        <div className="h-10 w-10 bg-gray-300 dark:bg-gray-600 rounded-full mr-4 flex items-center justify-center">
                          <User className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">User {i}</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Business Owner</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-white dark:bg-gray-800">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {[
                    'How do I get started?',
                    'What payment methods do you accept?',
                    'Can I upgrade my plan later?',
                    'Is there a free trial available?'
                  ].map((question, i) => (
                    <div key={i} className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg">
                      <h3 className="font-medium text-gray-900 dark:text-white flex items-center gap-2">
                        <HelpCircle className="h-5 w-5" />
                        {question}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mt-2">Placeholder answer for this question</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-800 dark:bg-gray-900 text-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div>
                    <h3 className="font-bold mb-4">Company</h3>
                    <ul className="space-y-2">
                      <li><Link href="#" className="hover:text-gray-300">About</Link></li>
                      <li><Link href="#" className="hover:text-gray-300">Careers</Link></li>
                      <li><Link href="#" className="hover:text-gray-300">Blog</Link></li>
                    </ul>
                  </div>
                  {/* Add more footer columns as needed */}
                </div>
                <div className="border-t border-gray-700 mt-8 pt-8 text-center">
                  <p>&copy; 2023 Your Company. All rights reserved.</p>
                </div>
              </div>
            </footer>
          </main>
        </div>
      )
    }
