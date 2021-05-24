$(function () {
    // 初始化好友表格
    API.Utils.initTable("friends-table", [{
        checkbox: true,
        clickToSelect: true,
        width: "50"
    }, {
        field: 'avatar',
        title: '头像',
        align: 'center',
        formatter: (value, row) => {
            value = value || API.Common.getUserLogoUrl(row.uin);
            return API.Utils.getImageHTML(API.Common.getMediaPath(value, row.custom_avatar, "Friends_HTML"));
        }
    }, {
        field: 'uin',
        title: 'QQ号',
        align: 'center',
        sortable: true,
        formatter: (value, row) => {
            return API.Common.getUserLink(value, value);
        }
    }, {
        field: 'name',
        title: '昵称',
        align: 'center',
        sortable: true,
        formatter: (value) => {
            return API.Common.formatContent(value, 'HTML');
        }
    }, {
        field: 'remark',
        title: '备注',
        align: 'center'
    }, {
        field: 'groupName',
        title: '分组',
        align: 'center',
        sortable: true
    }, {
        field: 'message',
        title: '通讯',
        align: 'center',
        formatter: (value, row) => {
            return API.Common.getMessageLink(row.uin, 'QQ聊天');
        }
    }, {
        field: 'addFriendTime',
        title: '相识',
        align: 'center',
        sortable: true
    }, {
        field: 'intimacyScore',
        title: '亲密度',
        align: 'center',
        sortable: true
    }, {
        field: 'common.friend',
        title: '共同好友',
        align: 'center',
        sortable: true,
        formatter: (value, row) => {
            if (!value) {
                return 0;
            }
            return value.length;
        }
    }, {
        field: 'common.group',
        title: '共同群组',
        align: 'center',
        sortable: true,
        formatter: (value, row) => {
            if (!value) {
                return "";
            }
            const groups = [];
            for (const group of value) {
                groups.push(group.name);
            }
            return groups.join('<br>');
        }
    }], friends);
});