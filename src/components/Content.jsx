import ItemList from "./ItemList";

const Content = ({ items, handleCheck, handleDelete }) => {

  return (
    <div className="Content">
        { items.length ? (
            <ItemList
                items={items}
                handleCheck={handleCheck}
                handleDelete={handleDelete}
            />
            ) : (
                <p style={{ color: "red" }}>The list is empty</p>
            )}
    </div>
  )
}

export default Content