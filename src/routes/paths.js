// ----------------------------------------------------------------------

function path(root, sublink) {
  return `${root}${sublink}`;
}

const ROOTS_AUTH = '/auth';
const ROOTS_DASHBOARD = '/dashboard';

const ADMIN_DASHBOARD = '/dashboard/admin';
const CLIENT_DASHBOARD = '/dashboard/client';
const STAFF_DASHBOARD = '/dashboard/staff';


// ----------------------------------------------------------------------

export const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: path(ROOTS_AUTH, '/login'),
  register: path(ROOTS_AUTH, '/register'),
  loginUnprotected: path(ROOTS_AUTH, '/login-unprotected'),
  registerUnprotected: path(ROOTS_AUTH, '/register-unprotected'),
  verify: path(ROOTS_AUTH, '/verify'),
  resetPassword: path(ROOTS_AUTH, '/reset-password'),
};

export const PATH_PAGE = {
  comingSoon: '/coming-soon',
  maintenance: '/maintenance',
  pricing: '/pricing',
  payment: '/payment',
  about: '/about-us',
  contact: '/contact-us',
  faqs: '/faqs',
  page404: '/404',
  page500: '/500',
  components: '/components',
};

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  general: {
    app: path(ADMIN_DASHBOARD, '/app'),
    clientApp: path(CLIENT_DASHBOARD, '/app'),
    staffApp: path(STAFF_DASHBOARD, '/app'),
    // app: path(ROOTS_DASHBOARD, '/app'),
    // task: path(ROOTS_DASHBOARD, '/task'),
    // subscription: path(ROOTS_DASHBOARD, '/subscription'),
    // support: path(ROOTS_DASHBOARD, '/support'),
    // setting: path(ROOTS_DASHBOARD, '/setting'),

    ecommerce: path(ROOTS_DASHBOARD, '/ecommerce'),
    analytics: path(ROOTS_DASHBOARD, '/analytics'),
    banking: path(ROOTS_DASHBOARD, '/banking'),
    booking: path(ROOTS_DASHBOARD, '/booking'),
  },
  mail: {
    root: path(ROOTS_DASHBOARD, '/mail'),
    all: path(ROOTS_DASHBOARD, '/mail/all'),
  },
  chat: {
    root: path(ROOTS_DASHBOARD, '/chat'),
    new: path(ROOTS_DASHBOARD, '/chat/new'),
    view: (name) => path(ROOTS_DASHBOARD, `/chat/${name}`),
  },
  adminChat: {
    root: path(ADMIN_DASHBOARD, '/chat'),
    new: path(ADMIN_DASHBOARD, '/chat/new'),
    view: (name) => path(ADMIN_DASHBOARD, `/chat/${name}`),
  },
  clientChat: {
    root: path(CLIENT_DASHBOARD, '/chat'),
    new: path(CLIENT_DASHBOARD, '/chat/new'),
    view: (name) => path(CLIENT_DASHBOARD, `/chat/${name}`),
  },
  staffChat: {
    root: path(STAFF_DASHBOARD, '/chat'),
    new: path(STAFF_DASHBOARD, '/chat/new'),
    view: (name) => path(STAFF_DASHBOARD, `/chat/${name}`),
  },
  calendar: path(ROOTS_DASHBOARD, '/calendar'),
  clientfaqs: path(CLIENT_DASHBOARD, '/support'),
  kanban: path(ROOTS_DASHBOARD, '/kanban'),
  user: {
    root: path(ROOTS_DASHBOARD, '/user'),
    new: path(ROOTS_DASHBOARD, '/user/new'),
    list: path(ROOTS_DASHBOARD, '/user/list'),
    cards: path(ROOTS_DASHBOARD, '/user/cards'),
    profile: path(ROOTS_DASHBOARD, '/user/profile'),
    account: path(ROOTS_DASHBOARD, '/user/account'),
    edit: (name) => path(ROOTS_DASHBOARD, `/user/${name}/edit`),
    demoEdit: path(ROOTS_DASHBOARD, `/user/reece-chung/edit`),
  },
  clintUser: {
    root: path(CLIENT_DASHBOARD, '/user'),
    profile: path(CLIENT_DASHBOARD, '/user/profile'),
    account: path(CLIENT_DASHBOARD, '/user/account'),
    edit: (name) => path(CLIENT_DASHBOARD, `/user/${name}/edit`),
  },
  eCommerce: {
    root: path(ROOTS_DASHBOARD, '/e-commerce'),
    shop: path(ROOTS_DASHBOARD, '/e-commerce/shop'),
    list: path(ROOTS_DASHBOARD, '/e-commerce/list'),
    checkout: path(ROOTS_DASHBOARD, '/e-commerce/checkout'),
    new: path(ROOTS_DASHBOARD, '/e-commerce/product/new'),
    view: (name) => path(ROOTS_DASHBOARD, `/e-commerce/product/${name}`),
    edit: (name) => path(ROOTS_DASHBOARD, `/e-commerce/product/${name}/edit`),
    demoEdit: path(ROOTS_DASHBOARD, '/e-commerce/product/nike-blazer-low-77-vintage/edit'),
    demoView: path(ROOTS_DASHBOARD, '/e-commerce/product/nike-air-force-1-ndestrukt'),
  },
  subscription: {
    root: path(CLIENT_DASHBOARD, '/subscription'),
    shop: path(CLIENT_DASHBOARD, '/subscription/shop'),
    list: path(CLIENT_DASHBOARD, '/subscription/list'),
    checkout: path(CLIENT_DASHBOARD, '/subscription/checkout'),
    new: path(CLIENT_DASHBOARD, '/subscription/package/new'),
    view: (name) => path(CLIENT_DASHBOARD, `/subscription/package/${name}`),
    edit: (name) => path(CLIENT_DASHBOARD, `/subscription/package/${name}/edit`),
    demoEdit: path(CLIENT_DASHBOARD, '/subscription/package/nike-blazer-low-77-vintage/edit'),
    demoView: path(CLIENT_DASHBOARD, '/subscription/package/nike-air-force-1-ndestrukt'),
  },
  invoice: {
    root: path(ROOTS_DASHBOARD, '/invoice'),
    list: path(ROOTS_DASHBOARD, '/invoice/list'),
    new: path(ROOTS_DASHBOARD, '/invoice/new'),
    view: (id) => path(ROOTS_DASHBOARD, `/invoice/${id}`),
    edit: (id) => path(ROOTS_DASHBOARD, `/invoice/${id}/edit`),
    demoEdit: path(ROOTS_DASHBOARD, '/invoice/e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1/edit'),
    demoView: path(ROOTS_DASHBOARD, '/invoice/e99f09a7-dd88-49d5-b1c8-1daf80c2d7b5'),
  },
  clientInvoice: {
    root: path(CLIENT_DASHBOARD, '/invoice'),
    list: path(CLIENT_DASHBOARD, '/invoice/list'),
    new: path(CLIENT_DASHBOARD, '/invoice/new'),
    view: (id) => path(CLIENT_DASHBOARD, `/invoice/${id}`),
    edit: (id) => path(CLIENT_DASHBOARD, `/invoice/${id}/edit`),
    demoEdit: path(CLIENT_DASHBOARD, '/invoice/e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1/edit'),
    demoView: path(CLIENT_DASHBOARD, '/invoice/e99f09a7-dd88-49d5-b1c8-1daf80c2d7b5'),
  },
  task: {
    root: path(ROOTS_DASHBOARD, '/task'),
    list: path(ROOTS_DASHBOARD, '/task/list'),
    new: path(ROOTS_DASHBOARD, '/task/new'),
    view: (id) => path(ROOTS_DASHBOARD, `/task/${id}`),
    edit: (id) => path(ROOTS_DASHBOARD, `/task/${id}/edit`),
    demoEdit: path(ROOTS_DASHBOARD, '/task/e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1/edit'),
    demoView: path(ROOTS_DASHBOARD, '/task/e99f09a7-dd88-49d5-b1c8-1daf80c2d7b5'),
  },
  clientTask: {
    root: path(CLIENT_DASHBOARD, '/task'),
    list: path(CLIENT_DASHBOARD, '/task/list'),
    new: path(CLIENT_DASHBOARD, '/task/new'),
    view: (id) => path(CLIENT_DASHBOARD, `/task/${id}`),
    edit: (id) => path(CLIENT_DASHBOARD, `/task/${id}/edit`),
    demoEdit: path(CLIENT_DASHBOARD, '/task/e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1/edit'),
    demoView: path(CLIENT_DASHBOARD, '/task/e99f09a7-dd88-49d5-b1c8-1daf80c2d7b5'),
  },
  staffTask: {
    root: path(STAFF_DASHBOARD, '/task'),
    list: path(STAFF_DASHBOARD, '/task/list'),
    new: path(STAFF_DASHBOARD, '/task/new'),
    view: (id) => path(STAFF_DASHBOARD, `/task/${id}`),
    edit: (id) => path(STAFF_DASHBOARD, `/task/${id}/edit`),
    demoEdit: path(STAFF_DASHBOARD, '/task/e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1/edit'),
    demoView: path(STAFF_DASHBOARD, '/task/e99f09a7-dd88-49d5-b1c8-1daf80c2d7b5'),
  },
  adminTask: {
    root: path(ADMIN_DASHBOARD, '/task'),
    list: path(ADMIN_DASHBOARD, '/task/list'),
    new: path(ADMIN_DASHBOARD, '/task/new'),
    view: (id) => path(ADMIN_DASHBOARD, `/task/${id}`),
    edit: (id) => path(ADMIN_DASHBOARD, `/task/${id}/edit`),
    demoEdit: path(ADMIN_DASHBOARD, '/task/e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1/edit'),
    demoView: path(ADMIN_DASHBOARD, '/task/e99f09a7-dd88-49d5-b1c8-1daf80c2d7b5'),
  },
  blog: {
    root: path(ROOTS_DASHBOARD, '/blog'),
    posts: path(ROOTS_DASHBOARD, '/blog/posts'),
    new: path(ROOTS_DASHBOARD, '/blog/new'),
    view: (title) => path(ROOTS_DASHBOARD, `/blog/post/${title}`),
    demoView: path(ROOTS_DASHBOARD, '/blog/post/apply-these-7-secret-techniques-to-improve-event'),
  },
};

export const PATH_DOCS = 'https://docs-minimals.vercel.app/introduction';
