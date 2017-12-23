import React from 'react';

const ListItems = items => {
    debugger
    let itemsToArray = items.split("; ");
    return (
        <div>
            <h3>{itemsToArray}</h3>
        </div>
    );
    
    // let itemsToArray = items.uses.split("; ");

    // const renderItems = itemsToArray.map(item =>
    //     <li>
    //         { item }
    //     </li>
    // );

    // return (
    //     <ul>
    //         { renderItems }
    //     </ul>
    // );
}

export default ListItems;


// const OilsList = ({ oils }) => {
//     const renderOils = oils.map(oil =>
//         <ListGroupItem key={ oil.id }>
//             <Link key={ oil.id } to={`/oils/${oil.id}`}>{ oil.name }</Link>
//         </ListGroupItem>
//     );

//     return (
//         <ListGroup>
//             { renderOils }
//         </ListGroup>
//     );
// };

// export default OilsList;