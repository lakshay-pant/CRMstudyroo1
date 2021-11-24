import styled from '@emotion/styled';

export const SidebarContainer = styled.div`
	width: ${(p) => (p.isSidebarOpen ? '25%' : '5%')};
	max-width: 227px;
	min-width: 80px;
	background-color: #fff;
	box-shadow: 0px 3px 6px #00000029;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center center;
	color: #5c5d5d;
	position: relative; // Toggler
	transition: 0.2s ease-in all;
	margin-top: 0;
	z-index: 99999;
`;

export const SidebarHeader = styled.h3`
	padding: 20px 0;
	text-align: center;
	margin-bottom: 10px;
	letter-spacing: 6px;
	font-family: ${(p) => p.font};
`;

export const MenuItemContainer = styled.div``;
export const ItemContainer = styled.div``;

// Menu items -------------------------------------------------------------
export const MenuItem = styled.div`
	${(p) =>
		!p.isSidebarOpen &&
		`
    text-align: center;
    ${
			p.selected &&
			`background-color: ${
				p.colorPalette.selectedBackgroundCollapsedMode === 'dark'
					? 'rgba(0, 0, 0, 0.6)'
					: 'rgba(255, 255, 255, 0.6)'
			}`
		};
  `};
	padding: 15px;
	font-weight: 600;
	color: ${(p) => (p.selected ? '#F37E32' : '#5C5D5D')};
	font-family: ${(p) => p.font};
	white-space: nowrap;
	position: relative; // Dropdown Icon
	transition: 0.2s ease-in all;
	&:hover {
		color: #fff;
		transition: 0.1s ease-in all;
		background: #f37e32;
	}

	&:after {
		content: '';
		display: ${(p) =>
			p.isSidebarOpen && p.selected && p.isOpen ? 'none' : 'block'};
		transition: 0.1s ease-in all;
	}
	${(p) =>
		!p.selected &&
		`
    &:hover {
      &:after {
        transition: .1s ease-in all;
      }
    }
  `}
`;

export const Text = styled.p`
	display: ${(p) => (p.isSidebarOpen ? 'inline' : 'none')};
	@media (max-width: 778px) {
		display: none;
	}
`;
export const Info = styled.div`
	display: ${(p) => (p.isSidebarOpen ? 'block' : 'none')};
`;
export const Icon = styled.img`
	${(p) =>
		p.isSidebarOpen &&
		`padding-right: 20px; transition: .2s ease-in padding-right`};
`;

// Sub menu items -------------------------------------------------------------------------
export const SubMenuItemContainer = styled.div`
	font-size: 14px;
	${(p) => p.isSidebarOpen && 'padding-left: 15%'};
	${(p) => !p.isSidebarOpen && 'text-align: center'};
`;
export const SubMenuItem = styled.p`
	color: #5c5d5d;
	${(p) => p.selected && 'font-weight: bold; letter-spacing: 2px;'};
	transition: 0.2s;
	margin-bottom: 0;
	padding: 12px;
	&:hover {
		color: #fff;
		background: #f37e32;
	}
`;

// Dropdown icon ----------------------------------------------------------------------
export const DropdownIcon = styled.span`
	position: absolute;
	top: ${(p) => (p.isOpen ? '25px' : '21px')};
	right: 24px;
	border: solid #5c5d5d;
	border-width: 0 1px 1px 0;
	padding: 3px;
	transform: ${(p) => (p.isOpen ? 'rotate(-135deg)' : 'rotate(45deg)')};
	transition: 0.4s;
`;

// Toggler -----------------------------------------------------------------------------
export const TogglerContainer = styled.div`
	position: absolute;
	width: 10%;
	top: 1%;
	right: 15px;
	@media (max-width: 778px) {
		top: 0.5%;
	}
`;

export const Toggler = styled.div`
	height: 40px;
	cursor: pointer;
	position: relative; // horizontal lines
	&:after {
		content: '';
		position: absolute;
		left: 0;
		top: 0.25em;
		height: 0.11em;
		width: 100%;
		background: #5c5d5d;
		box-shadow: 0 0.4em 0 0 #5c5d5d, 0 0.8em 0 0 #5c5d5d;
	}
`;
