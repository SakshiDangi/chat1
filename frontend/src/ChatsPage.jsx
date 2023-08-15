import { PrettyChatWindow } from 'react-chat-engine-pretty';

const ChatsPage = (props) => {
    return (
      <div style={{ height: '100vh' }}>
          <PrettyChatWindow
            projectId='86963971-650a-4624-828d-a808c92cecbd'
            username={props.user.username}
            secret={props.user.secret}
            style={{ height: '100%' }}
          />
      </div>
    )
}

export default ChatsPage;