/*
* 评论内容为空
* */
const emptyCommentTip = function () {
  modal({
    title: '提示',
    content: '请输入评论的内容',
    showCancel: false
  })
};

/*
* 创建时点击允许围观的问号
* */
const onlookersQuestionTip = function () {
  wx.showModal({
    title: '说明',
    content: '如不勾选此项，只有监督者才能看到此条约定的相关信息',
    showCancel: false
  })
};

/*
* 创建时点击私密的问号
* */
const privateQuestion = function () {
  wx.showModal({
    title: '说明',
    content: '设置为私密后别人将无法在大厅中看到此条约定',
    showCancel: false
  })
};

/*
* 没有权限评论
* */
const noCommentAuthority = function () {
  wx.showModal({
    title: '提示',
    content: '只有监督者才能参加评论',
    showCancel: false
  })
};

export default {
  emptyCommentTip,
  onlookersQuestionTip,
  privateQuestion,
  noCommentAuthority
}
