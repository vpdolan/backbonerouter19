function processData(data) {
  return data.map(function(item) {
    return `
    <li class='mentor list item' data-mentor-id="${item.objectId}">${item.Name}</li>
    <li class='mentor list item' data-mentor-id="${item.objectId}">${item.Email}</li>
    <li class='mentor list item' data-mentor-id="${item.objectId}">${item.Phone}</li>
    <li class='mentor list item' data-mentor-id="${item.objectId}">${item.Location}</li>`;
  }).join('');
  
}

function mentorsTemplate(data) {
    return `
      <h2>Something Mentor</h2>
      <ul>${processData(data)}</ul>
      `;
  }


export default mentorsTemplate;
