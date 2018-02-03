import React from "react";
import { Container, Row, Col} from "../Grid";

export const ArticleListItem = props => (
	<li className="list-group-item">
		<Container>
			<Row>
				<Col size="xs-8 sm-9">
					<h3> {props.title}</h3>
					<p>Date: {props.date}</p>
					<a rel="noreferrer noopener" target="_blank" href={props.href}>Go to Article</a>
				</Col>
			</Row>
		</Container>
	</li>
);