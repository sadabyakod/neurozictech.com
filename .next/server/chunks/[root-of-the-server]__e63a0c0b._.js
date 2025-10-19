module.exports = [
"[project]/.next-internal/server/app/api/chat/route/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/app/api/chat/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
;
async function POST(request) {
    try {
        const { message } = await request.json();
        if (!message || typeof message !== 'string') {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Invalid message format'
            }, {
                status: 400
            });
        }
        const response = generateAIResponse(message.toLowerCase());
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            response: response.text,
            timestamp: new Date().toISOString(),
            suggestions: response.suggestions,
            showEmailForm: response.showEmailForm
        });
    } catch (error) {
        console.error('Chat API Error:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Internal server error'
        }, {
            status: 500
        });
    }
}
function generateAIResponse(message) {
    // Enhanced AI response logic with suggestions and email form triggers
    // Greetings
    if (message.includes('hello') || message.includes('hi') || message.includes('hey') || message.includes('good morning') || message.includes('good evening')) {
        return {
            text: 'Hello! Welcome to Neurozic Software Solutions! 👋 I\'m your AI assistant, ready to help you with any questions about our services, technologies, or company. How can I assist you today?',
            suggestions: [
                'Tell me about your services',
                'Contact information',
                'Request a quote',
                'About Neurozic'
            ]
        };
    }
    // Services
    if (message.includes('service') || message.includes('what do you do') || message.includes('offerings')) {
        return {
            text: '🚀 Neurozic offers comprehensive software solutions:\n\n• **Web Development** - Modern, responsive websites\n• **Mobile App Development** - iOS & Android apps\n• **AI/ML Solutions** - Intelligent automation\n• **Cloud Services** - Scalable infrastructure\n• **Digital Transformation** - Complete business modernization\n• **Custom Software** - Tailored solutions\n\nWhich service interests you most?',
            suggestions: [
                'Web Development details',
                'Mobile App Development',
                'AI/ML Solutions',
                'Get a quote'
            ]
        };
    }
    // Web Development
    if (message.includes('web development') || message.includes('website') || message.includes('web design')) {
        return {
            text: '🌐 Our Web Development services include:\n\n• **Modern Frameworks**: React, Next.js, Angular\n• **Responsive Design**: Mobile-first approach\n• **E-commerce Solutions**: Online stores & payment integration\n• **CMS Development**: Easy content management\n• **Performance Optimization**: Fast loading times\n• **SEO Ready**: Search engine optimized\n\nWe build websites that drive results!',
            suggestions: [
                'See our portfolio',
                'Request web development quote',
                'Technologies we use',
                'Contact our team'
            ]
        };
    }
    // Mobile App Development
    if (message.includes('mobile') || message.includes('app development') || message.includes('ios') || message.includes('android')) {
        return {
            text: '📱 Mobile App Development expertise:\n\n• **Native Development**: iOS (Swift) & Android (Kotlin)\n• **Cross-Platform**: React Native, Flutter\n• **UI/UX Design**: Intuitive user experiences\n• **App Store Optimization**: Maximum visibility\n• **Backend Integration**: APIs & cloud services\n• **Maintenance & Support**: Ongoing updates\n\nLet\'s bring your app idea to life!',
            suggestions: [
                'Native vs Cross-platform',
                'App development process',
                'Mobile app quote',
                'See our mobile apps'
            ]
        };
    }
    // AI/ML
    if (message.includes('ai') || message.includes('artificial intelligence') || message.includes('machine learning') || message.includes('ml')) {
        return {
            text: '🤖 AI/ML Solutions we provide:\n\n• **Chatbots & Virtual Assistants**: Like this one!\n• **Predictive Analytics**: Data-driven insights\n• **Computer Vision**: Image & video analysis\n• **Natural Language Processing**: Text analysis\n• **Recommendation Systems**: Personalized experiences\n• **Process Automation**: Intelligent workflows\n\nTransform your business with AI!',
            suggestions: [
                'AI implementation cost',
                'Custom AI solution',
                'AI consultation',
                'AI success stories'
            ]
        };
    }
    // Pricing
    if (message.includes('price') || message.includes('cost') || message.includes('quote') || message.includes('budget') || message.includes('pricing')) {
        return {
            text: '💰 Our pricing is project-based and depends on:\n\n• **Project Complexity**: Simple to enterprise-level\n• **Timeline Requirements**: Standard vs expedited\n• **Technology Stack**: Technologies involved\n• **Team Size**: Resources needed\n• **Ongoing Support**: Maintenance requirements\n\n📞 Contact us for a **FREE consultation** and customized quote!',
            suggestions: [
                'Send email inquiry',
                'Request free consultation',
                'Contact sales team',
                'Typical project costs'
            ],
            showEmailForm: true
        };
    }
    // Contact
    if (message.includes('contact') || message.includes('phone') || message.includes('email') || message.includes('address') || message.includes('reach out')) {
        return {
            text: '📞 **Contact Neurozic Software Solutions:**\n\n📧 **Email**: techinfo@neurozic.com\n📱 **Phone**: +91 96322 77455\n📍 **Address**: No-1367, Vayu Block, \'T\' Wing,\n    Salarpuria GR Tech Park, Whitefield,\n    Bengaluru, Karnataka – 560066\n\n🌐 **Website**: neurozic.com\n\nWe\'re here to help! Reach out anytime.',
            suggestions: [
                'Send email inquiry',
                'Schedule a meeting',
                'Visit our office',
                'Connect on LinkedIn'
            ],
            showEmailForm: true
        };
    }
    // About company
    if (message.includes('about') || message.includes('company') || message.includes('who are you') || message.includes('neurozic')) {
        return {
            text: '🏢 **About Neurozic Software Solutions:**\n\nWe\'re a forward-thinking technology company in Bengaluru, specializing in innovative software solutions. Our mission is to **empower businesses through technology** with:\n\n• **Expert Team**: Skilled developers & designers\n• **Proven Track Record**: 200+ successful projects\n• **Innovation Focus**: Cutting-edge technologies\n• **Client-Centric**: Your success is our priority\n\nEmpowering Ideas Through Technology!',
            suggestions: [
                'Our team',
                'Company values',
                'Success stories',
                'Why choose Neurozic?'
            ]
        };
    }
    // Technologies
    if (message.includes('technology') || message.includes('tech stack') || message.includes('programming') || message.includes('framework')) {
        return {
            text: '⚡ **Technologies We Master:**\n\n**Frontend**: React, Next.js, Angular, Vue.js\n**Backend**: Node.js, Python, Java, .NET\n**Mobile**: React Native, Flutter, Swift, Kotlin\n**Database**: MongoDB, PostgreSQL, MySQL\n**Cloud**: AWS, Azure, Google Cloud\n**AI/ML**: TensorFlow, PyTorch, OpenAI\n\nWe stay current with the latest tech trends!',
            suggestions: [
                'Frontend technologies',
                'Backend solutions',
                'Cloud services',
                'AI/ML frameworks'
            ]
        };
    }
    // Process/How we work
    if (message.includes('process') || message.includes('how do you work') || message.includes('methodology') || message.includes('timeline')) {
        return {
            text: '🔄 **Our Development Process:**\n\n1. **Discovery** - Understanding your needs\n2. **Planning** - Strategy & timeline creation\n3. **Design** - UI/UX mockups & prototypes\n4. **Development** - Agile coding sprints\n5. **Testing** - Quality assurance & bug fixes\n6. **Deployment** - Launch & go-live support\n7. **Support** - Ongoing maintenance\n\nTransparent, efficient, and collaborative!',
            suggestions: [
                'Project timeline',
                'Agile methodology',
                'Quality assurance',
                'Post-launch support'
            ]
        };
    }
    // Support
    if (message.includes('support') || message.includes('maintenance') || message.includes('help') || message.includes('issue')) {
        return {
            text: '🛠️ **Comprehensive Support Services:**\n\n• **24/7 Technical Support**: Always available\n• **Bug Fixes**: Quick issue resolution\n• **Updates & Upgrades**: Keep your software current\n• **Performance Monitoring**: Optimal performance\n• **Security Updates**: Protection against threats\n• **Training**: Team onboarding & documentation\n\nYour success continues after launch!',
            suggestions: [
                'Support packages',
                'Emergency support',
                'Training programs',
                'Maintenance costs'
            ]
        };
    }
    // Default response with helpful suggestions
    return {
        text: 'Thank you for reaching out! 😊 I\'m here to help you learn about Neurozic Software Solutions. We specialize in creating innovative technology solutions that drive business growth.\n\nWhat would you like to know more about?',
        suggestions: [
            'Our services',
            'Get a quote',
            'Contact information',
            'About our company',
            'Technologies we use'
        ]
    };
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__e63a0c0b._.js.map