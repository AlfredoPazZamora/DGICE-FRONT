import React from "react";
import { Table } from "./Table";

export const MainFrame = ({idUser}) => {
	return (
		<div>
			<div className="overflow-hidden rounded-lg border border-gray-200 shadow-md mt-5">
				<table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
					<thead className="bg-gray-50">
						<tr>
							<th scope="col" className="px-6 py-4 font-medium text-gray-900">
								Nombre
							</th>
							<th scope="col" className="px-6 py-4 font-medium text-gray-900">
								Horas de acreditación
							</th>
							<th scope="col" className="px-6 py-4 font-medium text-gray-900">
								Titulo
							</th>
							<th scope="col" className="px-6 py-4 font-medium text-gray-900">
								Categoría
							</th>
							<th scope="col" className="px-6 py-4 font-medium text-gray-900"></th>
						</tr>
					</thead>
					<tbody className="divide-y divide-gray-100 border-t border-gray-100">
						<Table idUser/>
					</tbody>
				</table>
			</div>
		</div>
	);
};
