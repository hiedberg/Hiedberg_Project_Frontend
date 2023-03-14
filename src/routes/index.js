import { Suspense, lazy } from 'react';
import { Navigate, useRoutes, useLocation } from 'react-router-dom';
// layouts
import MainLayout from '../layouts/main';
import DashboardLayout from '../layouts/dashboard';
import LogoOnlyLayout from '../layouts/LogoOnlyLayout';
// guards
import GuestGuard from '../guards/GuestGuard';
import AuthGuard from '../guards/AuthGuard';
// import RoleBasedGuard from '../guards/RoleBasedGuard';
// config
import { PATH_AFTER_LOGIN } from '../config';
// components
import LoadingScreen from '../components/LoadingScreen';

// ----------------------------------------------------------------------

const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();

  return (
    <Suspense fallback={<LoadingScreen isDashboard={pathname.includes('/dashboard')} />}>
      <Component {...props} />
    </Suspense>
  );
};
//  <RoleBasedGuard accessibleRoles={['user']}>
//               <Login />
//             </RoleBasedGuard>
export default function Router() {
  return useRoutes([
    {
      path: 'auth',
      children: [
        {
          path: 'login',
          element: (
            <GuestGuard>
              <Login />
            </GuestGuard>
          ),
        },
        {
          path: 'register',
          element: (
            <GuestGuard>
              <Register />
            </GuestGuard>
          ),
        },
        { path: 'login-unprotected', element: <Login /> },
        { path: 'register-unprotected', element: <Register /> },
        { path: 'reset-password', element: <ResetPassword /> },
        { path: 'verify', element: <VerifyCode /> },
      ],
    },

    // Dashboard Routes
    {
      path: 'dashboard',
      element: (
        <AuthGuard>
          <DashboardLayout />
        </AuthGuard>
      ),
      children: [
        { element: <Navigate to={PATH_AFTER_LOGIN} replace />, index: true },
        { path: 'admin/app', element: <AdminApp /> },
        { path: 'client/app', element: <ClientApp /> },
        { path: 'staff/app', element: <StaffApp /> },
        { path: 'ecommerce', element: <GeneralEcommerce /> },
        { path: 'analytics', element: <GeneralAnalytics /> },
        { path: 'banking', element: <GeneralBanking /> },
        { path: 'booking', element: <GeneralBooking /> },
        {
          path: 'client/task',
          children: [
            { element: <Navigate to="/dashboard/client/task/list" replace />, index: true },
            { path: 'list', element: <ClientTaskList /> },
            { path: 'new', element: <ClientTaskCreate /> },
            { path: ':id/edit', element: <ClientTaskCreate /> },
          ],
        },
        {
          path: 'admin/task',
          children: [
            { element: <Navigate to="/dashboard/admin/task/list" replace />, index: true },
            { path: 'list', element: <AdminTaskList /> },
            { path: 'new', element: <AdminTaskCreate /> },
            { path: ':id/edit', element: <AdminTaskCreate /> },
          ],
        },
        {
          path: 'e-commerce',
          children: [
            { element: <Navigate to="/dashboard/e-commerce/shop" replace />, index: true },
            { path: 'shop', element: <EcommerceShop /> },
            { path: 'product/:name', element: <EcommerceProductDetails /> },
            { path: 'list', element: <EcommerceProductList /> },
            { path: 'product/new', element: <EcommerceProductCreate /> },
            { path: 'product/:name/edit', element: <EcommerceProductCreate /> },
            { path: 'checkout', element: <EcommerceCheckout /> },
          ],
        },
        {
          path: 'client/subscription',
          children: [
            { element: <Navigate to="/dashboard/subscription/shop" replace />, index: true },
            { path: 'shop', element: <SubscriptionShop /> },
            { path: 'package/:name', element: <SubscriptionPackageDetails /> },
            { path: 'list', element: <SubscriptionPackageList /> },
            { path: 'package/new', element: <SubscriptionPackageCreate /> },
            { path: 'package/:name/edit', element: <SubscriptionPackageCreate /> },
            { path: 'checkout', element: <SubscriptionCheckout /> },
          ],
        },
        {
          path: 'user',
          children: [
            { element: <Navigate to="/dashboard/user/profile" replace />, index: true },
            { path: 'profile', element: <UserProfile /> },
            { path: 'cards', element: <UserCards /> },
            { path: 'list', element: <UserList /> },
            { path: 'new', element: <UserCreate /> },
            { path: ':name/edit', element: <UserCreate /> },
            { path: 'account', element: <UserAccount /> },
          ],
        },
        {
          path: 'client/user',
          children: [
            { element: <Navigate to="/dashboard/client/user/profile" replace />, index: true },
            { path: 'profile', element: <ClientProfile /> },
            { path: ':name/edit', element: <ClientCreate /> },
            { path: 'account', element: <ClientAccount /> },
          ],
        },
        {
          path: 'client/invoice',
          children: [
            { element: <Navigate to="/dashboard/client/invoice/list" replace />, index: true },
            { path: 'list', element: <ClientInvoiceList /> },
            { path: ':id', element: <ClientInvoiceDetails /> },
          ],
        },
        {
          path: 'invoice',
          children: [
            { element: <Navigate to="/dashboard/invoice/list" replace />, index: true },
            { path: 'list', element: <InvoiceList /> },
            { path: ':id', element: <InvoiceDetails /> },
            { path: ':id/edit', element: <InvoiceEdit /> },
            { path: 'new', element: <InvoiceCreate /> },
          ],
        },
        {
          path: 'task',
          children: [
            { element: <Navigate to="/dashboard/task/list" replace />, index: true },
            { path: 'list', element: <TaskList /> },
            { path: ':id', element: <TaskDetails /> },
            { path: ':id/edit', element: <TaskEdit /> },
            { path: 'new', element: <TaskCreate /> },
          ],
        },
        {
          path: 'blog',
          children: [
            { element: <Navigate to="/dashboard/blog/posts" replace />, index: true },
            { path: 'posts', element: <BlogPosts /> },
            { path: 'post/:title', element: <BlogPost /> },
            { path: 'new', element: <BlogNewPost /> },
          ],
        },
        {
          path: 'mail',
          children: [
            { element: <Navigate to="/dashboard/mail/all" replace />, index: true },
            { path: 'label/:customLabel', element: <Mail /> },
            { path: 'label/:customLabel/:mailId', element: <Mail /> },
            { path: ':systemLabel', element: <Mail /> },
            { path: ':systemLabel/:mailId', element: <Mail /> },
          ],
        },
        {
          path: 'chat',
          children: [
            { element: <Chat />, index: true },
            { path: 'new', element: <Chat /> },
            { path: ':conversationKey', element: <Chat /> },
          ],
        },
        {
          path: 'client/chat',
          children: [
            { element: <ClientChat />, index: true },
            { path: 'new', element: <ClientChat /> },
            { path: ':conversationKey', element: <ClientChat /> },
          ],
        },
        {
          path: 'admin/chat',
          children: [
            { element: <AdminChat />, index: true },
            { path: 'new', element: <AdminChat /> },
            { path: ':conversationKey', element: <AdminChat /> },
          ],
        },
        {
          path: 'staff/chat',
          children: [
            { element: <StaffChat />, index: true },
            { path: 'new', element: <StaffChat /> },
            { path: ':conversationKey', element: <StaffChat /> },
          ],
        },
        { path: 'calendar', element: <Calendar /> },
        { path: 'client/support', element: <ClientFaqs /> },
        { path: 'kanban', element: <Kanban /> },
      ],
    },

    // Main Routes
    {
      path: '*',
      element: <LogoOnlyLayout />,
      children: [
        { path: 'coming-soon', element: <ComingSoon /> },
        { path: 'maintenance', element: <Maintenance /> },
        { path: 'pricing', element: <Pricing /> },
        { path: 'payment', element: <Payment /> },
        { path: '500', element: <Page500 /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" replace /> },
      ],
    },
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { element: <HomePage />, index: true },
        { path: 'about-us', element: <About /> },
        { path: 'contact-us', element: <Contact /> },
        { path: 'faqs', element: <Faqs /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}

// AUTHENTICATION
const Login = Loadable(lazy(() => import('../pages/auth/Login')));
const Register = Loadable(lazy(() => import('../pages/auth/Register')));
const ResetPassword = Loadable(lazy(() => import('../pages/auth/ResetPassword')));
const VerifyCode = Loadable(lazy(() => import('../pages/auth/VerifyCode')));

// DASHBOARD

// GENERAL
const GeneralApp = Loadable(lazy(() => import('../pages/dashboard/GeneralApp')));
const AdminApp = Loadable(lazy(() => import('../pages/dashboard/AdminApp')));
const ClientApp = Loadable(lazy(() => import('../pages/dashboard/ClientApp')));
const StaffApp = Loadable(lazy(() => import('../pages/dashboard/StaffApp')));


// TASK
const ClientTaskList = Loadable(lazy(() => import('../pages/dashboard/ClientTaskList')));
const ClientTaskCreate = Loadable(lazy(() => import('../pages/dashboard/ClientTaskCreate')));
const ClientTaskEdit = Loadable(lazy(() => import('../pages/dashboard/ClientTaskCreate')));

// TASK
const AdminTaskList = Loadable(lazy(() => import('../pages/dashboard/AdminTaskList')));
const AdminTaskCreate = Loadable(lazy(() => import('../pages/dashboard/AdminTaskCreate')));
const AdminTaskEdit = Loadable(lazy(() => import('../pages/dashboard/AdminTaskCreate')));

// Dashboards
const GeneralEcommerce = Loadable(lazy(() => import('../pages/dashboard/GeneralEcommerce')));
const GeneralAnalytics = Loadable(lazy(() => import('../pages/dashboard/GeneralAnalytics')));
const GeneralBanking = Loadable(lazy(() => import('../pages/dashboard/GeneralBanking')));
const GeneralBooking = Loadable(lazy(() => import('../pages/dashboard/GeneralBooking')));

// ECOMMERCE
const EcommerceShop = Loadable(lazy(() => import('../pages/dashboard/EcommerceShop')));
const EcommerceProductDetails = Loadable(lazy(() => import('../pages/dashboard/EcommerceProductDetails')));
const EcommerceProductList = Loadable(lazy(() => import('../pages/dashboard/EcommerceProductList')));
const EcommerceProductCreate = Loadable(lazy(() => import('../pages/dashboard/EcommerceProductCreate')));
const EcommerceCheckout = Loadable(lazy(() => import('../pages/dashboard/EcommerceCheckout')));

// ECOMMERCE

const SubscriptionShop = Loadable(lazy(() => import('../pages/dashboard/SubscriptionShop')));
const SubscriptionPackageDetails = Loadable(lazy(() => import('../pages/dashboard/SubscriptionPackageDetails')));
const SubscriptionPackageList = Loadable(lazy(() => import('../pages/dashboard/SubscriptionPackageList')));
const SubscriptionPackageCreate = Loadable(lazy(() => import('../pages/dashboard/SubscriptionPackageCreate')));
const SubscriptionCheckout = Loadable(lazy(() => import('../pages/dashboard/SubscriptionCheckout')));

// INVOICE
const InvoiceList = Loadable(lazy(() => import('../pages/dashboard/InvoiceList')));
const InvoiceDetails = Loadable(lazy(() => import('../pages/dashboard/InvoiceDetails')));
const InvoiceCreate = Loadable(lazy(() => import('../pages/dashboard/InvoiceCreate')));
const InvoiceEdit = Loadable(lazy(() => import('../pages/dashboard/InvoiceEdit')));

// CLIENT INVOICE
const ClientInvoiceList = Loadable(lazy(() => import('../pages/dashboard/ClientInvoiceList')));
const ClientInvoiceDetails = Loadable(lazy(() => import('../pages/dashboard/ClientInvoiceDetails')));
// const ClientInvoiceCreate = Loadable(lazy(() => import('../pages/dashboard/ClientInvoiceCreate')));
// const ClientInvoiceEdit = Loadable(lazy(() => import('../pages/dashboard/ClientInvoiceEdit')));

// TASK
const TaskList = Loadable(lazy(() => import('../pages/dashboard/TaskList')));
const TaskDetails = Loadable(lazy(() => import('../pages/dashboard/TaskDetails')));
const TaskCreate = Loadable(lazy(() => import('../pages/dashboard/TaskCreate')));
const TaskEdit = Loadable(lazy(() => import('../pages/dashboard/TaskEdit')));

// BLOG
const BlogPosts = Loadable(lazy(() => import('../pages/dashboard/BlogPosts')));
const BlogPost = Loadable(lazy(() => import('../pages/dashboard/BlogPost')));
const BlogNewPost = Loadable(lazy(() => import('../pages/dashboard/BlogNewPost')));

// USER
const UserProfile = Loadable(lazy(() => import('../pages/dashboard/UserProfile')));
const UserCards = Loadable(lazy(() => import('../pages/dashboard/UserCards')));
const UserList = Loadable(lazy(() => import('../pages/dashboard/UserList')));
const UserAccount = Loadable(lazy(() => import('../pages/dashboard/UserAccount')));
const UserCreate = Loadable(lazy(() => import('../pages/dashboard/UserCreate')));

// Client
const ClientProfile = Loadable(lazy(() => import('../pages/dashboard/ClientProfile')));
const ClientAccount = Loadable(lazy(() => import('../pages/dashboard/ClientAccount')));
const ClientCreate = Loadable(lazy(() => import('../pages/dashboard/ClientCreate')));

// Client Chat
const ClientChat = Loadable(lazy(() => import('../pages/dashboard/ClientChat')));
// Admin Chat
const AdminChat = Loadable(lazy(() => import('../pages/dashboard/AdminChat')));
// Staff Chat
const StaffChat = Loadable(lazy(() => import('../pages/dashboard/StaffChat')));
// APP
const Chat = Loadable(lazy(() => import('../pages/dashboard/Chat')));
const Mail = Loadable(lazy(() => import('../pages/dashboard/Mail')));
const Calendar = Loadable(lazy(() => import('../pages/dashboard/Calendar')));
const Kanban = Loadable(lazy(() => import('../pages/dashboard/Kanban')));

// MAIN
const HomePage = Loadable(lazy(() => import('../pages/Home')));
const About = Loadable(lazy(() => import('../pages/About')));
const Contact = Loadable(lazy(() => import('../pages/Contact')));
const Faqs = Loadable(lazy(() => import('../pages/Faqs')));
const ClientFaqs = Loadable(lazy(() => import('../pages/dashboard/ClientFaqs')));
const ComingSoon = Loadable(lazy(() => import('../pages/ComingSoon')));
const Maintenance = Loadable(lazy(() => import('../pages/Maintenance')));
const Pricing = Loadable(lazy(() => import('../pages/Pricing')));
const Payment = Loadable(lazy(() => import('../pages/Payment')));
const Page500 = Loadable(lazy(() => import('../pages/Page500')));
const NotFound = Loadable(lazy(() => import('../pages/Page404')));
