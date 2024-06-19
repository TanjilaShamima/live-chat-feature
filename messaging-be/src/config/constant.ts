import dotenv from 'dotenv';
dotenv.config();

const roles = {
    JOB_SEEKER: 'JOB_SEEKER',
    ADMIN: 'admin',
} as const;

const resources = {
    USER: 'USER',
    PROFILE: 'PROFILE',
    PRODUCT: 'PRODUCT',
    TRANSACTION: 'TRANSACTION',
    SUBSCRIPTION: 'SUBSCRIPTION',
} as const;

const operations = {
    CREATE: 'CREATE',
    READ: 'READ',
    UPDATE: 'UPDATE',
    DELETE: 'DELETE',
} as const;

const fields = {
    USER: {
        _id: '_id',
        email: 'email',
        state: 'state',
        firstName: 'firstName',
        lastName: 'lastName',
        role: 'role',
        createdBy: 'createdBy',
        updatedBy: 'updatedBy',
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
        CreatedBy: 'CreatedBy',
        UpdatedBy: 'UpdatedBy',
        Tests: 'Tests',
    },
    PRODUCT: {
        _id: '_id',
        title: 'title',
        description: 'description',
        active: 'active',
        subscriptionInterval: 'subscriptionInterval',
        price: 'price',
        access: 'access',
        createdBy: 'createdBy',
        updatedBy: 'updatedBy',
        CreatedBy: 'CreatedBy',
        UpdatedBy: 'UpdatedBy',
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
        stripeId: 'stripeId',
    },
    TRANSACTION: {
        _id: '_id',
        amount: 'amount',
        user: 'user',
        User: 'User',
        createdBy: 'createdBy',
        updatedBy: 'updatedBy',
        CreatedBy: 'CreatedBy',
        UpdatedBy: 'UpdatedBy',
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
        subscription: 'subscription',
        Subscription: 'Subscription',
        stripeId: 'stripeId',
    },
    SUBSCRIPTION: {
        _id: '_id',
        product: 'product',
        user: 'user',
        createdBy: 'createdBy',
        updatedBy: 'updatedBy',
        CreatedBy: 'CreatedBy',
        UpdatedBy: 'UpdatedBy',
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
        User: 'User',
        Product: 'Product',
        status: 'status',
        Transactions: 'Transactions',
    },
} as const;

const resolveParameters = {
    user: {
        getCreatedBy: 'getCreatedBy',
        getUpdatedBy: 'getUpdatedBy',
        getTests: 'getTests',
    },
    profile: {
        getCreatedBy: 'getCreatedBy',
        getUpdatedBy: 'getUpdatedBy',
    },
    product: {
        getCreatedBy: 'getCreatedBy',
        getUpdatedBy: 'getUpdatedBy',
        getSubscriptions: 'getSubscriptions',
    },
    transaction: {
        getSubscription: 'getSubscription',
        getUser: 'getUser',
        getCreatedBy: 'getCreatedBy',
        getUpdatedBy: 'getUpdatedBy',
    },
    subscription: {
        getProduct: 'getProduct',
        getUser: 'getUser',
        getCreatedBy: 'getCreatedBy',
        getUpdatedBy: 'getUpdatedBy',
        getTransactions: 'getSubscriptions',
    },
} as const;

const paginationParameters = {
    limit: 'limit',
    sortBy: 'sortBy',
    sortOrder: 'sortOrder',
    page: 'page',
    search: 'search',
    projection: 'projection',
} as const;

const errorNames = {
    VALIDATION_ERROR: 'ValidationError',
    CAST_ERROR: 'CastError',
    DUPLICATE_ERROR: 'DuplicateError',
    NOT_FOUND_ERROR: 'NotFoundError',
    UNAUTHORIZED_ERROR: 'UnauthorizedError',
    FORBIDDEN_ERROR: 'ForbiddenError',
    INTERNAL_SERVER_ERROR: 'InternalServerError',
    BAD_REQUEST_ERROR: 'BadRequestError',
    UNPROCESSABLE_ENTITY_ERROR: 'UnprocessableEntityError',
    NOT_IMPLEMENTED_ERROR: 'NotImplementedError',
    SERVICE_UNAVAILABLE_ERROR: 'ServiceUnavailableError',
    GATEWAY_TIMEOUT_ERROR: 'GatewayTimeoutError',
    TOO_MANY_REQUESTS_ERROR: 'TooManyRequestsError',
    CONFLICT_ERROR: 'ConflictError',
} as const;

const appConfig = {
    name: process.env.API_NAME || 'API',
    version: process.env.API_VERSION || '1.0.0',
    port: process.env.APP_PORT || 5000,
    appDomain: process.env.APP_DOMAIN || 'http://localhost:8000',
    prefix: (version: string) => process.env.API_PREFIX || `/api/${version}`,
    environment: process.env.NODE_ENV || 'dev',
    emailUser: process.env.EMAIL_USER,
    emailPassword: process.env.EMAIL_PASSWORD,
    jwtSecret: process.env.JWT_SECRET,
    frontendUrl: process.env.FRONTEND_URL,
    webHookPrefix: process.env.WEBHOOK_PREFIX || '/webhook',
    stripe: {
        secretKey: process.env.STRIPE_SECRET_KEY,
        publicKey: process.env.STRIPE_PUBLISHABLE_KEY,
        webhookSecret: process.env.STRIPE_WEBHOOK_SECRET,
    },
    db: {
        mongoDBURL: process.env.MONGODB_URI || '',
    },
    smtp: {
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        userName: process.env.SMTP_USERNAME,
        password: process.env.SMTP_PASSWORD,
    },
    jwt: {
        jwtActivationKey: process.env.JWT_ACTIVATION_KEY,
        jwtAccessKey: process.env.JWT_ACCESS_KEY,
        jwtPasswordResetKey: process.env.JWT_RESET_PASSWORD_KEY,
    },
    regex: {
        passwordRegex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
    },
    auth: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        },
        gmail: {
            clientId: process.env.GMAIL_CLIENT_ID,
            clientSecret: process.env.GMAIL_CLIENT_SECRET,
            accessToken: process.env.GMAIL_ACCESS_TOKEN,
            refreshToken: process.env.GMAIL_REFRESH_TOKEN,
            user: process.env.GMAIL_USER,
        },
    },
};

const subscriptionIntervals: string[] = ['month', 'year', '3 months', '6 months'];

export {
    roles,
    resources,
    operations,
    fields,
    resolveParameters,
    paginationParameters,
    errorNames,
    appConfig,
    subscriptionIntervals,
};
