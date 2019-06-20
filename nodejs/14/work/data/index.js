const identitys = [ //所有的身份
    {
        id: 'teacher',
        text: '老师',
        limits: [1, 2, 3, 4, 5]
    },
    {
        id: 'headboy',
        text: '班长',
        limits: [1, 3, 4, 5]
    },
    {
        id: 'leader',
        text: '组长',
        limits: [1, 3, 4]

    },
    {
        id: 'student',
        text: '学生',
        limits: [1, 3]
    },
    {
        id: 'visitor',
        text: '游客',
        limits: [1]
    }
];
const limits = [ // 所有的权限
    {
        lid: 1,
        page: '/index.html',
        title: '首页'
    },
    {
        lid: 2,
        page: '/usermanger.html',
        title: '用户管理'
    },
    {
        lid: 3,
        page: '/singleinfo.html',
        title: '个人信息'
    },
    {
        lid: 4,
        page: '/leadermanger.html',
        title: '小组管理'
    },
    {
        lid: 5,
        page: '/headmanger.html',
        page: '/班级管理'
    }
];

const users = [ // 所有的用户
    {
        username: 'zhangsan',
        userpwd: 'zhangsan',
        id: 'visitor'
    },
    {
        username: 'lisi',
        userpwd: 'lisi',
        id: 'teacher'
    },
    {
        username: 'wangwu',
        userpwd: 'wangwu',
        id: 'leader'
    },
    {
        username: 'zhaoliu',
        userpwd: 'zhaoliu',
        id: 'headboy'
    },
    {
        username: 'wangwus',
        userpwd: 'wangwus',
        id: 'student'
    },
]

module.exports = {
    identitys,
    limits,
    users
}