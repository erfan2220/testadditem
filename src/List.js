import './List.css';
const List =({items})=>
{
return(
    <div className="grocery-list">
        {
            items.map(item=>{
                const [id,title]=item;
                return <article key={id}>
                    <p className="title">{title}</p>
                </article>
                }
            )
        }
    </div>
)
}

export default List;