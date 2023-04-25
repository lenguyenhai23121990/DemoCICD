const title = (state = 'Demo', action: any = {}) => {
  switch (action.type) {
    case 'HOME':
      return 'Demo - Trang chủ'
    default:
      return state
  }
}
export default title

// RFR automatically changes the document.title for you :)