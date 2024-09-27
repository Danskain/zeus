import { Route, Routes } from 'react-router-dom'
import { InspeccionesInternasSeguridad } from './pages/inspeccionesInternasSeguridad'
import { CompromisosAltaGenerencia } from './pages/compromisosAltaGerencia'
import Iso45001Cards from './pages/iso45001/Iso45001Cards'
import { Botiquin } from './pages/botiquin/Botiquin'
import { PageLink, PageTitle } from '@zeus/_zeus/layout/core'
import { Kit } from './pages/kit/Kit'
import { ExtintoresPage } from './pages/extintores/extintoresPage'

const indexIso45001: Array<PageLink> = [
	{
		title: 'Iso45001',
		path: '/iso45001',
		isSeparator: false,
		isActive: false,
	},
	{
		title: '',
		path: '',
		isSeparator: true,
		isActive: false,
	},
]

const registrosBreadcrumbs: Array<PageLink> = [
	{
		title: 'Registro',
		path: '/iso45001',
		isSeparator: false,
		isActive: false,
	},
	{
		title: '',
		path: '',
		isSeparator: true,
		isActive: false,
	},
]

const registroAntiderrame: Array<PageLink> = [
	{
		title: 'Kit',
		path: '/iso45001/kit',
		isSeparator: false,
		isActive: false,
	},
	{
		title: '',
		path: '',
		isSeparator: true,
		isActive: false,
	},
]

export function ISO45001Routes(): JSX.Element {
	return (
		<Routes>
			<Route
				path=""
				element={
					<>
						<PageTitle breadcrumbs={indexIso45001}>Iso 45001</PageTitle>
						<Iso45001Cards />
					</>
				}
			/>
			<Route
				path="botiquin"
				element={
					<>
						<PageTitle breadcrumbs={registrosBreadcrumbs}>Botiquin</PageTitle>
						<Botiquin />
					</>
				}
			/>
			<Route
				path="kit"
				element={
					<>
						<PageTitle breadcrumbs={registroAntiderrame}>
							Kit Antiderrame
						</PageTitle>
						<Kit />
					</>
				}
			/>
			<Route
				path="inspeccion-extintores"
				element={< ExtintoresPage />}
			/>
			<Route
				path="inspecciones-internas-seguridad"
				element={<InspeccionesInternasSeguridad />}
			/>
			<Route
				path="compromisos-alta-generencia"
				element={<CompromisosAltaGenerencia />}
			/>
		</Routes>
	)
}
