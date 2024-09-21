
const FetchHelper = (request) => {
    const data = new URLSearchParams();
    data.append('message', request);

    let fetchReturn = fetch("https://cchandrew.com/api/", {
    mode: 'cors',
    method: 'POST',
    body: data,
    headers: {
        'Accept': 'application/json',
    },
    })
    .then(response => response.json())
    .then((data) => { return data;});

    return fetchReturn;
};

export default FetchHelper;