import '../App.css';

const TestDatabase = () => {
	const fetchData = () => {
		fetch('https://cchandrew.com/api/', {
			method: 'GET',
			// headers: {},
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
			});
	};

	return <button onClick={fetchData()}>TestDatabase</button>;
};

// Example Post request
// function addPost(e){
//     e.preventDefault();

//     let title = document.getElementById('title').value;
//     let body = document.getElementById('body').value;

//     fetch('https://jsonplaceholder.typicode.com/posts', {
//         method:'POST',
//         headers: {
//             'Accept': 'application/json, text/plain, */*',
//             'Content-type':'application/json'
//         },
//         body:JSON.stringify({title:title, body:body})
//     })
//     .then((res) => res.json())
//     .then((data) => console.log(data))
// }

export default TestDatabase;
