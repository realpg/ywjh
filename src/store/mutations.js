import * as types from './mutation-types'
const matations = {
    /**
     * state:当前状态树
     * v: 提交matations时传的参数
     */
    //屏幕可用高度
    [types.SET_WINDOWHEIGHT]: (state, v) => {
        state.windowHeight = v
    },
}
export default matations