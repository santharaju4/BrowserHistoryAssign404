import './index.css'

const BrowserTodoList = props => {
  const {browserDetails, onUpdateValue} = props
  const {id, title, timeAccessed, domainUrl, logoUrl} = browserDetails

  const onDeleteValue = () => {
    onUpdateValue(id)
  }

  return (
    <li className="list-item">
      <div className="browser-start">
        <p className="browser-time">{timeAccessed}</p>
      </div>
      <div className="browser-middle">
        <img src={logoUrl} alt="domain logo" className="logo-image" />
        <p className="browser-title">{title}</p>
        <p className="name">{domainUrl}</p>
      </div>
      <div className="browser-end">
        <button
          type="button"
          data-testid="delete"
          className="delete-button"
          onClick={onDeleteValue}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-button"
          />
        </button>
      </div>
    </li>
  )
}

export default BrowserTodoList
