type VISIBILITY_TYPE = '正常'
    | '无状态栏的沉浸式界面'
    | '有状态栏的沉浸式界面'

/**
 * 设置状态栏和界面的显示情况
 * 
 * @param {VISIBILITY_TYPE} type
 */
export function setSystemUiVisibility(type: VISIBILITY_TYPE) {
    const window = activity.getWindow()
    switch (type) {
        case '正常':
            window.getDecorView().setSystemUiVisibility(android.view.View.SYSTEM_UI_FLAG_VISIBLE)
            break;
        case '无状态栏的沉浸式界面':
            window.getDecorView().setSystemUiVisibility(android.view.View.SYSTEM_UI_FLAG_FULLSCREEN)
            window.setStatusBarColor(android.graphics.Color.TRANSPARENT);
            break;
        case '有状态栏的沉浸式界面':
            window.getDecorView().setSystemUiVisibility(android.view.View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN)
            window.setStatusBarColor(android.graphics.Color.TRANSPARENT)
        default:
            break;
    }

}

