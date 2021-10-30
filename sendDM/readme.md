# sendDM
특정 메시지를 받았을때, 메시지 작성자의 개인 메시지(DM)로 메시지를 보내는 코드입니다.

봇은 메시지를 보내지만, 메시지 작성자는 봇에게 DM을 보내게 하고싶지 않으면,
```js
client.on('message', message => {
})
```
부분에
```js
if(message.guild===null) return
```
을 추가해주시면 됩니다. (DM은 guild가 아니므로, guild값이 null임)
