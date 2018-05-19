import commentModel from './api/comments/commentModel';

const comments = [
    {
        'gameID': 'MGS',
        'username': 'Eric86',
        'text': 'Comment_ERIC_MGS',
    },
    {
        'gameID': 'DS',
        'username': 'Eric86',
        'text': 'Comment_ERIC_DS1',
    },
    {
        'gameID': 'DS',
        'username': 'Eric86',
        'text': 'Comment_ERIC_DS2',
    },
    {
        'gameID': 'MHW',
        'username': 'Eric86',
        'text': 'Comment_ERIC_MHW',
    },
    {
        'gameID': 'MGS',
        'username': 'Mick87',
        'text': 'Comment_MICK_MGS',
    },
    {
        'gameID': 'DS',
        'username': 'Mick87',
        'text': 'Comment_MICK_DS',
    },
    {
        'gameID': 'MHW',
        'username': 'Mick87',
        'text': 'Comment_MICK_MHW',
    }
];

export const loadComments = () => {
    commentModel.find({}).remove(() => {
        commentModel.collection.insert(comments, (err, docs)=>{
    if (err) {
      console.log(`failed to Load Comment Data: ${err}`);
    } else {
      console.info(`${comments.length} comments were successfully stored.`);
    }
  });
});
};