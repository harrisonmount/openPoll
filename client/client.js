console.log('Hello');

const form = document.querySelector('form');

//hide the loading gif until a poll is sent
const loadingElement = document.querySelector('.loading');
loadingElement.style.display = '';

//server that we make requests from
const API_URL = 'http://localhost:5055/polls';

const pollsElement = document.querySelector('.polls');

listAllPolls();

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const name = formData.get('name');
    const content1 = formData.get('content1');
    const content2 = formData.get('content2');
    const votes1 = 0;
    const votes2 = 0;
    
    const poll = {
        name,
        content1,
        content2,
        votes1,
        votes2
    };

    //form.style.display = 'none';
    loadingElement.style.display = '';

    fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(poll),
        headers: {
            'content-type' : 'application/json'
        }
    }).then(response => response.json())
    .then(createdPoll => {
        form.reset();

        //remove the form for 30 seconds after a submission
        setTimeout(() =>{
            form.style.display = '';
        }, 30000)
        listAllPolls();
    });
});

function listAllPolls() {
    pollsElement.innerHTML = '';
    fetch(API_URL)
    .then(response => response.json())
    .then(polls => {
        console.log(polls);
        polls.reverse();
        polls.forEach(poll => {
            const div = document.createElement('div');
            
            const header = document.createElement('h3');
            header.textContent = poll.name;

            const content1 = document.createElement('p');
            content1.textContent = poll.content1;

            const content2 = document.createElement('p');
            content2.textContent = poll.content2;

            const button1 = document.createElement('button');
            button1.textContent = poll.content1;
            button1.append("⬆️");
            button1.style.color = 'white';
            button1.style.backgroundColor ='hsl(194,86.3%,57.1%)';
            button1.onclick=function(){voteonpoll(poll, 1)};
            

            const button2 = document.createElement('button');
            button2.textContent = poll.content2;
            button2.append("⬆️");
            button2.style.color = 'white';
            button2.style.backgroundColor ='hsl(194,86.3%,57.1%)';
            button2.onclick=function(){voteonpoll(poll, 2)};

            const votes1 = document.createElement('p');
            votes1.textContent = poll.content1 + ": "+poll.votes1;

            const votes2 = document.createElement('p');
            votes2.textContent = poll.content2 + ": "+poll.votes2;

            const date = document.createElement('small');
            date.textContent = new Date(poll.created);

            div.appendChild(header);
            //div.appendChild(content1);
            //div.appendChild(content2);
            div.appendChild(button1);
            div.appendChild(button2);
            div.appendChild(votes1);
            div.appendChild(votes2);
            div.appendChild(date);
            
            pollsElement.appendChild(div);
        });
        loadingElement.style.display = 'none';
    });
}
function voteonpoll(poll, option) {
    //console.log("button "+ poll._id + " clicked" + option);
    //console.log(poll._id);
    const pollid = poll._id;
    //const votenumber1 = poll.votes1;
    //const votenumber2 = poll.votes2;
    const op = option;
    const votenumber1 = poll.votes1;
    const votenumber2 = poll.votes2;

    const sender = {
        pollid,
        op,
        votenumber1,
        votenumber2
    };
    console.log(pollid);
    fetch(API_URL+'/vote', {
        method: 'POST',
        body: JSON.stringify(sender),
        headers: {
            'content-type' : 'application/json'
        }
    }).then(response => response.json())
    .then(updatedPoll => {
        console.log('pollupdated');
        listAllPolls();
    });
}

/*function voteonpoll2(poll, option) {
    //console.log("button "+ poll._id + " clicked" + option);
    console.log(poll._id);
    const pollid = poll._id;
    const op = option;
    const sender = {
        pollid,
        op
    };
    fetch(API_URL + '/'+pollid+'/vote', {
        method: 'POST',
        body: JSON.stringify(sender),
        headers: {
            'content-type' : 'application/json'
        }
    }).then(response => response.json())
    .then(json => 
        console.log(json)
    );
}*/