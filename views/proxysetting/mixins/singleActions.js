import { getSetPublicAction } from '@/utils/common/tableActions'

export default {
  created () {
    this.singleActions = [
      {
        label: '修改属性',
        permission: 'proxysettings_update',
        action: (row) => {
          this.createDialog('ProxysettingUpdateDialog', {
            data: [row],
            columns: this.columns,
            title: '修改属性',
            onManager: this.onManager,
          })
        },
        meta: this.commonMeta,
      },
      getSetPublicAction(this, {
        name: this.$t('dictionary.proxysetting'),
        scope: 'domain',
        resource: 'proxysettings',
      }),
      {
        label: '删除',
        permission: 'proxysettings_delete',
        action: (row) => {
          this.createDialog('DeleteResDialog', {
            data: [row],
            columns: this.columns,
            title: '删除',
            name: this.$t('dictionary.proxysetting'),
            onManager: this.onManager,
          })
        },
        meta: (row) => this.commonMeta(row, 'delete'),
      },
    ]
  },
  methods: {
    commonMeta (row = {}, action) {
      const { id } = row
      const isDirect = id === 'DIRECT'
      let validate = !isDirect
      let tooltip = '直连不支持此操作'
      if (!row.can_delete && action === 'delete') {
        validate = false
        tooltip = '已关联云账号，请取消关联云账号后重试'
      }
      if (isDirect) {
        tooltip = '直连不支持此操作'
      }
      return {
        isDirect,
        validate,
        tooltip,
      }
    },
  },
}
