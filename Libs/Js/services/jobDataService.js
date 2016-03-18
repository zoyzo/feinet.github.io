﻿mainMoudle.factory('jobDataService', function () {
    var jobData = [
        {
            id: 1,
            name: '售前技术支持工程师',
            type: '技术支持类',
            number: '若干',
            location: '上海',
            email: 'rsb@dahuatech.com',
            responsibility: '1、配合销售完成系统项目销售任务，制作符合客户需求的方案；<br />' +
                        '2、跟踪所负责区域的项目，协调公司资源完成项目操作的各项活动；<br />' +
                        '3、维护所负责行业的技术层面客户关系，组织区域的品牌活动；<br />' +
                        '4、大项目的投标组织工作。',
            require: '1、3年以上工作经验， 有售前技术工作经验者优先；<br />' +
                        '2、有系统集成型项目经验者优先，如智能楼宇、高速监控、工业自动化、通信、IT集成等大型项目；<br />' +
                        '3、在所负责区域内定居，并能在区域内出差；<br />' +
                        '4、专科以上学历。'
        },
        {
            id: 2,
            name: '销售代表',
            type: '销售商务类',
            number: '若干',
            location: '上海',
            email: 'rsb@dahuatech.com',
            responsibility: '1、负责公司产品的销售及推广；<br />' +
                            '2、根据市场营销计划，完成部门销售指标；<br />' +
                            '3、开拓新市场，发展新客户，增加产品销售范围；<br />' +
                            '4、负责辖区市场信息的手机及竞争对手的分析。<br />' +
                            '5、负责销售区域内销售活动的策划和执行，完成销售任务。',
            require: '1、有销售相关工作经验，业绩突出者优先；<br />' +
                                    '2、性格外向、反应敏捷、表达能力强，具有较强的沟通能力及交际技巧，具有较强亲和力；<br />' +
                                    '3、 具备一定的市场分析及判断能力，良好的客户服务意识；<br />' +
                                    '4、热爱销售，有责任心，能承受较大的工作压力；<br />' +
                                    '5、专科及以上学历，市场营销等相关专业。'
        },
        {
            id: 3,
            name: '软件测试工程师',
            type: '研发类',
            number: '2人',
            location: '上海',
            email: 'rsb@dahuatech.com',
            responsibility: '1、负责电子产品及相关软件功能测试；<br />' +
                            '2、根据需求文档编写测试计划，设计测试用例；<br />' +
                            '3、实施软件测试，并对软件问题进行跟踪分析和报告，推动测试中发现问题及时合理解决；<br />' +
                            '4、提出产品和软件改进需求；<br />' +
                            '5、.产品说明书编写',
            require: '1、能够掌握单机、网络环境下多种体系结构软件的测试；<br />' +
            '2、能够在 Linux/Windows 平台上，建立多种体系结构（包括数据库）的软件运行和测试环境；<br />' +
            '3、能够掌握软件开发技术并能够编写简单应用程序、测试脚本；<br />' +
            '4、能够独立或协助开发人员进行单元测试和白盒测试；<br />' +
            '5、良好的团队合作精神，有学习能力，有责任心和沟通能力，逻辑思维能力强；<br />' +
            '6、热爱软件测试工作，可以胜任重复性工作，工作细致认真，有耐心，稳定性强；<br />' +
            '7、本科以上学历；大学计算机、网络工程、软件工程等专业毕业，大学英语四级以上。'
        },
        {
            id: 4,
            name: '硬件工程师',
            type: '研发类',
            number: '2人',
            location: '上海',
            email: 'rsb@dahuatech.com',
            responsibility: '1、安防系统研发、测试；<br />' +
                                    '2、电子产品测试设备及工装的开发、制作与维护；<br />' +
                                    '3、编制测试过程及设备使用的作业指导文件；<br />' +
                                '4、参与单板开发与调试、测试工作。',
            require: '1、具有良好的数字电路，模拟电路，电力电子电路等专业理论基础知识；<br />' +
                                    '2、能够熟练运用各种电子电路测试仪器仪表，有较强的电路、设备动手制作能力；<br />' +
                                    '3、具有安防系统产品开发、测试工作经验者优先考虑；<br />' +
                                    '4、工业自动化、电子相关专业，本科以上学历，有2年以上硬件设计工作经验'
        },
        {
            id: 5,
            name: '商务专员',
            type: '职能类',
            number: '1人',
            location: '上海',
            email: 'rsb@dahuatech.com',
            responsibility: '负责销售合同的管理，ERP相关单据的操作',
            require: '1、能熟练操作Office办公软件，会操作ERP软件优先；<br />' +
                                    '2、认真仔细，能吃苦耐劳，有较强的责任心；<br />' +
                                    '3、具有较好的协调、沟通能力和团队合作精神；<br />' +
                                    '4、本科学历。'
        },
        {
            id: 5,
            name: '商务专员111',
            type: '职能类',
            number: '1人',
            location: '上海',
            email: 'rsb@dahuatech.com',
            responsibility: '负责销售合同的管理，ERP相关单据的操作',
            require: '1、能熟练操作Office办公软件，会操作ERP软件优先；<br />' +
                                    '2、认真仔细，能吃苦耐劳，有较强的责任心；<br />' +
                                    '3、具有较好的协调、沟通能力和团队合作精神；<br />' +
                                    '4、本科学历。'
        },
        {
            id: 5,
            name: '商务专员222',
            type: '职能类',
            number: '1人',
            location: '上海',
            email: 'rsb@dahuatech.com',
            responsibility: '负责销售合同的管理，ERP相关单据的操作',
            require: '1、能熟练操作Office办公软件，会操作ERP软件优先；<br />' +
                                    '2、认真仔细，能吃苦耐劳，有较强的责任心；<br />' +
                                    '3、具有较好的协调、沟通能力和团队合作精神；<br />' +
                                    '4、本科学历。'
        }

    ];

    return {
        all: function () {
            return jobData;
        },
        getJob: function (jobId) {
            for (var i = 0; i < jobData.length; i++) {
                if (jobData[i].id === parseInt(jobId)) {
                    return jobData[i];
                }
            }
            return null;
        }
    };
});
