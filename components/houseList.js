import { useState } from "react";
import HouseRow from "./houseRow";

const housesArray = [
	{
		id: 1,
		address: "12 Valley of kings, Geneva",
		country: "Switzerland",
		price: 90000
	},
	{
		id: 2,
		address: "89 Road of forks, Bern",
		country: "Switzerland",
		price: 50000
	}
];

const HouseList = () => {
	const [houses, setHouses] = useState(housesArray);
	return (
		<>
			<div className="row mb-2">
				<h5 className="themeFontColor text-center">
					Houses currently on the market
				</h5>
			</div>
			<table className="table table-hover">
				<thead>
					<tr>
						<th>Address</th>
						<th>Country</th>
						<th>Asking Price</th>
					</tr>
				</thead>
				<tbody>
					{
						houses.map(h => ( 
							<HouseRow key={h.id } house={ h} />
						))
					}
				</tbody>
			</table>
		</>
	);
};

export default HouseList;