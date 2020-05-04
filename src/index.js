import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './approvalCard';

const App = () => {
	return (
		<div className="ui container comments">
			<ApprovalCard>
				<div>
					<h1>Pazi!!</h1>
					ziher tole?
				</div>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail 
					author={faker.name.firstName()} 
					timeAgo="Dons ob 4:00" 
					avatar={faker.image.avatar()} 
					txt={faker.random.words()} />

			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail 
					author={faker.name.firstName()} 
					timeAgo="Dons ob 54:00" 
					avatar={faker.image.avatar()} 
					txt={faker.random.words()} />
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail 
					author={faker.name.firstName()} 
					timeAgo="Včeri ob 13:00" 
					avatar={faker.image.avatar()} 
					txt={faker.random.words()} />
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail 
					author={faker.name.firstName()} 
					timeAgo="Zadnjič ob 22:00" 
					avatar={faker.image.avatar()} 
					txt={faker.random.words()} />
			</ApprovalCard>
		</div>	
	)
};

ReactDOM.render(<App />, document.querySelector('#root'));