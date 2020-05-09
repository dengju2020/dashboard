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
        meta: this.commonMeta,
      },
    ]
  },
}