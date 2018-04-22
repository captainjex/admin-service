'use strict';

module.exports = function(Message) {
  Message.afterRemote('create', function(context, user, next) {
    if (context.args.data.isSubscribe) {
      let app = Message.app;
      let Subscriber = app.models.Subscriber;
      Subscriber.create({
        fullName: context.args.data.fullName,
        nickName: context.args.data.nickName,
        email: context.args.data.email
      }).then(result => {
        console.log('berhasil create subscriber, ', result);
      }).catch(error => {
        console.log('error create subscriber, ', error);
      });
    }
    next();
  });
};
