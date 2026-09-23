import { Link } from "react-router"

export default function LinkCard({title, description, route}) {
	const Card = (
		<article className="card-modulo">
			<h2>{title}</h2>
			<p>{description}</p>
		</article>
	)

	if (route) {
		return (
			<Link to={route} className="link-card">
				{Card}
			</Link>
		)
	}

	return Card
}
