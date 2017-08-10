//Store Different SVG Icons for use as map objects

let mapIcon = {
	'default': 'M256 21.52l-4.5 2.597L52.934 138.76v234.48L256 490.48l203.066-117.24V138.76L256 21.52zm0 20.783l185.066 106.85v213.695L256 469.698 70.934 362.847V149.152L256 42.302zm0 30.93l-4.5 2.597-153.78 88.785v182.77L256 438.768l158.28-91.383v-182.77L256 73.232zm0 20.783l140.28 80.992v161.984L256 417.984l-140.28-80.992V175.008L256 94.016zm0 30.93l-4.5 2.597-108.998 62.93v131.054L256 387.055l113.498-65.528V190.473L256 124.945zm0 20.783l95.498 55.135v110.27L256 366.27l-95.498-55.135v-110.27L256 145.73zm0 30.928l-4.5 2.598-64.213 37.072v79.344L256 335.342l68.713-39.67v-79.344L256 176.658zm0 20.783l50.713 29.28v58.56L256 314.56l-50.713-29.28v-58.56L256 197.44zm0 30.93l-4.5 2.6-19.428 11.216v27.628L256 283.63l23.928-13.816v-27.628L256 228.37z',
	
	'monster': {
		'slime':'M260.875 18.375C220.39 207.41 99.905 207.03 99.905 339.563c0 89.282 81.826 153.843 160.97 153.843 80.922 0 157.78-64.24 157.78-147.312 0-127.22-115.946-139.043-157.78-327.72zM164.72 224.53c20.58 28.427 49.463 50.325 84.843 67.126-52.21 33.95-104.512 4.16-84.844-67.125zm186.56 0c19.67 71.285-32.632 101.076-84.842 67.126 35.38-16.8 64.262-38.7 84.843-67.125zm-228.467 91c13.56 15.95 31.694 29.396 52.968 39.25.824 19.023 7.407 34.174 23.75 53.376-.656-16.11.23-30.838 3.876-43.125 17.655 5.02 36.742 7.75 56.656 7.75 18.736 0 36.733-2.438 53.5-6.905 3.442 12.116 4.3 26.536 3.657 42.28 15.894-18.673 22.544-33.512 23.655-51.81 22.768-9.975 42.15-24.008 56.438-40.814-1.84 57.177-40.896 105.505-94.625 122.533L291.75 403.78l-12.625 39.564c-6.228.84-12.593 1.28-19.063 1.28-6.468 0-12.834-.44-19.062-1.28l-12.625-39.563-10.938 34.283c-53.73-17.03-92.788-65.358-94.625-122.532z ',

		'bear': 'M220.41 35.389c-.584-.175-9.216 1.425-18.76 7.976-8.948 6.143-18.914 15.31-27.283 25.137l.34.268c-6.134 7.797-13.129 16.816-17.613 25.767-4.485 8.951-6.294 17.19-3.989 24.71l-17.209 5.274c-4.144-13.518-.522-26.817 5.104-38.046 2.208-4.408 4.753-8.587 7.398-12.52C105.378 74.11 62.33 71.25 18 66.748v409.828a264.891 264.891 0 0 1 24.8-19.922l1.901-1.345 2.313-.254c24.034-2.65 55.821-6.651 84.908-15.803 29.086-9.152 54.934-23.401 68.633-45.191l2.558-4.073 4.809-.134c91.21-2.547 140.126-19.862 193.652-50.153.126-.095.252-.199.377-.295-6.874-.376-14.493-.65-22.334-.617-20.444.086-42.1 3.08-51.367 8.973l-9.658-15.188c16.106-10.242 39.29-11.694 60.949-11.785 15.73-.066 30.683 1.026 40.254 1.797 6.938-7.739 13.533-16.503 19.18-25.514 5.066-8.086 9.33-16.386 12.537-24.177-3.821-.55-7.395-1.642-10.633-3.258-8.283-4.134-14.026-11.447-16.754-19.596-3.827-11.432-2.087-24.798 5.268-35.777l-64.641-23.35.277-6.598c.396-9.422-6.387-27.053-14.601-34.712-21.568-20.112-46.91-21.58-78.06-33.93l-3.554-1.408-1.453-3.536c-10.662-25.924-17.06-44.024-23.47-55.5-6.412-11.475-11.574-16.287-23.48-19.841zm-5.808 20.82l9.84 15.072c-29.07 18.978-29.771 34.937-31.23 51.65l-17.93-1.562c1.5-17.208 5.882-43.33 39.32-65.16zM119.6 135.473l8.119 16.064c-42.266 21.357-60.741 47.237-65.88 70.451 14.366-11.279 29.7-17.184 50.218-16.46l15.238.538-7.834 13.08c-17.268 28.834-22.552 42.534-26.24 59.696 4.017-1.528 8.007-2.635 12.119-2.979 9.78-.818 19.142 2.28 29.105 7.746l9.5 5.211-6.869 8.383c-9.978 12.178-13.966 20.02-15.224 27.56-.477 2.856-.454 5.974-.198 9.333 2.711-2.798 5.58-5.305 8.942-7.198 9.125-5.137 19.745-5.825 33.097-4.632l-1.601 17.927c-11.9-1.063-18.132-.162-22.666 2.391-4.534 2.553-8.91 7.798-14.88 18.39l-11.05 19.614-5.516-21.826c-3.535-13.99-5.842-25.216-3.882-36.961 1.486-8.91 5.434-17.37 12.002-26.742-3.422-1.103-6.376-1.5-9.258-1.258-5.244.439-11.572 3.057-20.965 9.203l-17.365 11.361 3.572-20.441c4.283-24.513 7.539-40.242 23.588-69.49-14.037 2.56-23.415 10.322-37.408 25.492l-13.442 14.57-2.12-19.709c-3.829-35.558 16.816-78.954 76.898-109.314zm143.707 26.976c17.788 7.852 39.24 14.301 56.859 16.617l3.707 17.616c-3.852.81-7.24.644-10.861.07-1.363 9.026-9.537 15.736-18.74 15.736-10.089 0-18.946-8.06-18.946-18.396 0-2.45.511-4.766 1.404-6.883-8.85-3.702-23.717-6.978-28.798-14.723 5.796-2.514 14.755-10.553 15.375-10.037zM443.633 225.4c-3.758 6.287-4.294 13.381-2.438 18.928 1.396 4.17 3.941 7.317 7.721 9.203 2.142 1.07 4.803 1.797 8.147 1.823.303-1.51.546-2.968.707-4.348-.926-6.793-6.555-16.61-14.137-25.606z',

		'bandit': 'M280.054 19.867c-64.315 0-121.76 28.793-159.643 73.934 27.387.07 87.928 3.05 96.12 25.726-38.414-12.105-79.753-11.26-108.534-9.302a201.013 201.013 0 0 0-13.656 23.314c31.507-8.307 147.998-3.37 154.8 21.268-75.985-18.624-140.59-8.65-162.058-4.895-8.768 22.446-13.584 46.805-13.584 72.272 0 111.736 96.248 269.949 210.324 269.949 57.808 0 109.1-40.63 145.637-95.248-31.403 23.812-98.04 57.308-139.002 34.648 81.592-8.994 139.965-50.978 156.19-63.353 25.207-47.142 39.959-100.432 39.959-145.996 0-111.737-92.477-202.317-206.553-202.317zm-.002 151.692c105.084 0 190.273 27.727 190.273 61.931 0 22.047-4.495 33.48-57.797 44.453-29.39 6.052-95.127-31.181-132.476-31.181-34.864 0-87.12 41.345-115.219 36.017-56.597-10.732-75.053-26.433-75.053-49.289 0-34.204 85.188-61.931 190.272-61.931zm83.885 39.894c-20.14-.12-41.571 3.295-41.475 9.91.182 12.453 17.364 22.298 38.377 21.99 21.013-.306 18.555-16.216 37.717-23.101-.085-5.837-16.85-8.693-34.62-8.799zm-172.682 2.883c-17.77.105-34.534 2.964-34.62 8.8 19.162 6.885 16.704 22.796 37.718 23.102 21.013.307 38.195-9.54 38.377-21.992.096-6.615-21.336-10.03-41.475-9.91zm92.57 82.441c31.032 0 56.188 25.235 56.188 25.235s-28.184-11.104-59.217-11.104c-31.032 0-53.16 11.104-53.16 11.104s25.156-25.235 56.19-25.235zM31.25 411.39c4.344 2.046 7.783-40.336 52.246-61.265-8.111-8.465-12.438-24.638-14.24-35.502-32.733 4.158-55.012 84.887-38.006 96.767zm56.31-41.694c-7.511-.052-17.26-.228-17.445 16.937-.498 46.31-42.805 96.953-40.128 98.215 7.138 3.364 49.598-32.077 61.906-59.44 4.159-9.244 11.516-55.603-4.333-55.712z',

		'elton': 'M262 96.795c-60 0-115.84 16.07-162.48 43.67l7.37 91.17 14.2 3.62c8.8-73.35 65.57-130.12 134.08-130.11 70.35 0 128.32 59.86 134.68 136.06l10.15-2.59 8.64-106.89c-43.23-22.22-93.28-34.93-146.64-34.93zm182 56.3l-6.13 75.85 42.73-10.9s-33.62 50.7-47.33 67.8L416.467 494H494V198.287a278.49 278.49 0 0 0-50-45.19zm-379.62 11.76A275.38 275.38 0 0 0 18 212.925V494h72.982L73.08 272.426c-10.5-13.69-17.82-24.71-18.23-25.31l-22.92-34.59 37.07 9.45zm289.48 15.14l5.95 36.85-45.34-34.09 3.1 50.57-44.33-42.07-18.67 47.95-23-46.95-35.47 37.18-7.1-47.18-32.9 38.61-6.82-27.52a146.56 146.56 0 0 0-13.43 61.73c.007 3.733.143 7.426.41 11.08-4.51-7.39-8.18-12.65-8.18-12.65l-59.95-15.29s49.92 75.36 75.59 75.36c1.306.01 2.602-.21 3.83-.65 11.98 27.99 32.37 50.62 57.46 63.73 9.07-36.31 28.51-88.87 34-103.46-2.4-2.87-6.08-4.86-10.51-6.16-8.16-2.4-18.91-2.44-29-1.23-9.92 1.19-19.21 3.57-24.77 6.09l-6.61-14.57c18.2-8.26 72.67-17.12 88.52 14.59-12.02 21.91-39.79 124.66-40.28 129.91-.72 7.73.73 13.13 4.58 17 6.87 6.91 22.09 9.55 44 7.62 23.31-2.05 32.18-7.39 36.24-10.71 9.6-7.86 1.97-28.56-.8-36.69-2.26-6.63-5.03-14.12-7.53-20.84v-.08l-1-2.76c-18.86-50.56-26.54-75.59-15.44-86.28l.06-.06c7.02-6.68 31.78-28.17 55.53-23.82 11.9 2.22 21.22 10.18 27.72 23.76l-16.51 3.07c-3.84-6.36-8.47-10-14.08-11-8.57-1.57-19.13 2.91-28.51 9.17a99.32 99.32 0 0 0-12.87 10.28c-.35.93-1.7 6.02 3.65 24.75 3.89 13.63 10.04 30.09 15.46 44.63 3.06 8.22 5.69 15.31 7.82 21.42 19.89-12.92 36.17-32.14 46.69-55.14 1.806 2.085 5.055 3.073 7.42 3.06 25.67 0 75.58-75.4 75.58-75.4l-59.96 15.28s-5.75 8.22-11.68 18.55a150.51 150.51 0 0 0 1.69-22.51 145 145 0 0 0-20.56-75.13zm-151.67 96.35c9.58 0 17.35 8 17.35 8s-7.77 8-17.35 8c-9.58 0-17.35-8-17.35-8s7.77-8 17.35-8zm115.76 0c9.58 0 17.35 8 17.35 8s-7.77 8-17.35 8c-9.58 0-17.35-8-17.35-8s7.77-8 17.35-8zm-204.24 40.18L128.114 494H379.31l13.59-167.564c-8.47 5.71-16.13 8.52-23.36 8.71a143.18 143.18 0 0 1-49.95 51.838c1.11 4.44 1.35 13.33 1.35 14.83-.07 18.13-4.34 36.21-54.52 40.63-5.173.455-10.033.68-14.58.68-19.67 0-33.54-4.28-42.17-13-7.25-7.29-10.33-17.3-9.17-29.77.21-2.27.57-4.81 1-7.55-27.09-13-49.61-35.59-64.09-63.86-7.28-1.49-15.06-5.54-23.7-12.42z',

		'janine': 'M256 41c-28.25 0-58.36 18.25-81.166 44.857-3.138 3.66-6.123 7.477-8.947 11.403L208 69.184l23.127 15.418c.506-6.936 2.568-13.312 6.07-18.565C241.265 59.937 247.934 55 256 55s14.735 4.936 18.803 11.037c3.502 5.253 5.564 11.63 6.07 18.565L304 69.184l42.113 28.076c-2.824-3.926-5.81-7.742-8.947-11.403C314.36 59.25 284.25 41 256 41zm0 32c-.77 0-2.103.436-3.826 3.02C250.45 78.608 249 82.995 249 88c0 3.83.85 7.29 2.02 9.865l4.98 3.32 4.98-3.32C262.15 95.29 263 91.83 263 88c0-5.006-1.45-9.393-3.174-11.98C258.103 73.437 256.77 73 256 73zm-48 17.816l-28.623 19.08 5.336 1.067c16.922 2.09 36.528 3.426 56.605 3.867-1.384-1.3-2.626-2.74-3.7-4.268L208 90.817zm96 0l-29.617 19.747c-1.075 1.527-2.317 2.968-3.7 4.267 20.077-.442 39.685-1.777 56.608-3.867l5.333-1.067L304 90.816zM32 112c33.318 33.318 58.914 89.742 71.463 126.506 3.176-25.792 7.433-52.057 12.54-74.658 1.177-5.203 2.363-10.177 3.585-14.922C98.66 132.53 44.818 112 32 112zm448 0c-12.818 0-66.66 20.53-87.588 36.926 1.222 4.745 2.408 9.72 3.584 14.922 5.108 22.6 9.365 48.866 12.54 74.658C421.087 201.742 446.683 145.318 480 112zm-331.47 10.086c-4.642 8.756-10.375 25.398-14.97 45.73-5.475 24.23-10.06 53.44-13.257 81.444-2.72 23.812-4.36 46.505-4.832 64.775 6.863-23.28 15.328-51.522 26.116-79.943 14.948-39.38 33.48-78.513 59.758-101.444l-52.813-10.562zm214.94 0l-52.814 10.562c26.277 22.93 44.81 62.063 59.758 101.444 10.788 28.42 19.253 56.664 26.115 79.943-.474-18.27-2.114-40.963-4.833-64.775-3.197-28.003-7.782-57.213-13.258-81.444-4.595-20.332-10.328-36.974-14.97-45.73zm-128.755 10.62l-6.69 3.345c-6.37 3.187-12.575 8.02-18.574 14.118 6.667.82 12.99 2.112 18.59 3.863 8.714 2.728 16.785 5.412 20.364 14.75l-16.808 6.44c.716 1.868-2.263-1.923-8.932-4.01-6.67-2.085-15.925-3.606-25.332-3.99-.636-.025-1.273-.033-1.91-.048-3.23 4.555-6.38 9.44-9.442 14.596 4.823-1.175 9.422-1.768 14.02-1.768 12 0 24 4 40 12 0 16-16 32-32 32-9.86 0-25.784-6.078-36.563-14.484-4.653 9.97-9.01 20.393-13.023 30.964-2.324 6.122-4.538 12.267-6.662 18.38 9.174 24.796 21.778 46.163 35.352 63.615 13.475 17.326 27.913 30.755 40.576 39.666C240.342 371.05 251.75 375 256 375s15.658-3.95 28.32-12.86c12.663-8.91 27.1-22.34 40.576-39.665 13.574-17.452 26.178-38.82 35.352-63.614-2.124-6.113-4.338-12.258-6.662-18.38-4.013-10.57-8.37-20.995-13.024-30.964C329.784 217.922 313.86 224 304 224c-16 0-32-16-32-32 16-8 28-12 40-12 4.598 0 9.197.593 14.02 1.768-3.043-5.124-6.173-9.98-9.383-14.512-9.19.424-18.187 1.915-24.707 3.955-6.67 2.087-9.648 5.878-8.932 4.01l-16.81-6.44c3.58-9.338 11.653-12.022 20.37-14.75 4.95-1.548 10.476-2.728 16.296-3.55-6.093-6.248-12.4-11.19-18.88-14.43l-6.69-3.345c-7.034.196-14.15.295-21.284.295-7.133 0-14.25-.1-21.285-.295zM200 192a8 8 0 0 0-8 8 8 8 0 0 0 8 8 8 8 0 0 0 8-8 8 8 0 0 0-8-8zm111.648 0a8 8 0 0 0-8 8 8 8 0 0 0 8 8 8 8 0 0 0 8-8 8 8 0 0 0-8-8zM240 256l16 4.098L272 256c0 16-16 16-16 16s-16 0-16-16zm-96.836 28.87c-4.49 14.25-8.274 27.123-11.822 39.16-9.37 62.528-29.578 99.06-52.65 146.353 4.716-.48 9.643-1.316 14.462-2.922 10.293-3.43 19.87-9.632 26.795-23.485l8.05-16.1 8.05 16.1c7.835 15.668 12.134 21.143 14.272 22.773 1.07.815 1.84 1.144 3.942 1.793.25.08.683.214.984.308 12.907-29.755 25.753-81.982 27.535-123.414-3.33-3.765-6.635-7.728-9.887-11.91-10.863-13.966-21.126-30.27-29.732-48.655zm225.672 0c-8.606 18.385-18.87 34.688-29.732 48.655-3.252 4.18-6.557 8.144-9.887 11.91 1.824 42.395 15.232 96.096 28.435 125.454.942-.053 1.702-.12 2.155-.21 1.098-.223.9-.08 1.836-1.022 1.873-1.886 6.306-9.683 14.306-25.683l8.05-16.1 8.05 16.1c6.927 13.853 16.503 20.055 26.796 23.486 5.303 1.77 10.72 2.63 15.857 3.073-17.65-45.806-38.75-79.5-50.51-134.562-4.353-14.547-9.39-32.163-15.357-51.1zM240 288s16 0 16 6.693C256 288 272 288 272 288c16 0 32 16 48 16 0 0-28.9 29.78-48 32-5.653.657-16-5.96-16-5.96s-10.347 6.617-16 5.96c-19.1-2.22-48-32-48-32 16 0 32.012-15.997 48-16zm-40.482 74.475c-.435 4.7-.954 9.44-1.58 14.207l1.55 2.326 25.91 38.865 24.24-24.236 1.048-1.05c-10.23-1.496-21.165-7.142-33.366-15.728-5.783-4.07-11.77-8.882-17.802-14.385zm112.964 0c-6.033 5.503-12.02 10.314-17.802 14.384-12.2 8.585-23.134 14.23-33.364 15.728l25.286 25.285 25.91-38.865 1.55-2.326c-.626-4.767-1.145-9.508-1.58-14.207zm-118.82 40.242c-4.95 25.17-12.022 49.39-19.78 68.283h70.358l-28.166-35.072-22.412-33.21zm124.676 0l-22.412 33.21L267.76 471h70.36c-7.76-18.893-14.83-43.113-19.782-68.283zM256 412.727l-19.88 19.882L256 456.942l19.88-24.334L256 412.726z',
	},
	'adventurer': {
		'WingedSword': 'M246.78 18.656v101.22c7.988.266 16.003.267 24 0V18.655h-24zm-72.155 110.406v30.813h168.313v-30.813c-55.755 12.73-113.104 12.604-168.313 0zm-150.28 35.063l9.343 37.594 132.187 8.093 9.406.562-.655 9.406c-2.594 38.077 5.257 78.673 25.563 112.44l7.625-146.47-183.47-21.625zm463.186 0l-177.842 20.97 7.187 137.843c16.457-31.775 22.736-68.503 20.375-103.157l-.625-9.405 9.375-.563 132.188-8.093 9.343-37.595zm-260.624 14.438L216.25 383.188v44.187l44.375 66.53 43.03-65.342-13-250h-22.53V429.5h-18.688V178.562h-22.53zM38.186 220.72c3.52 11.234 8.043 23.026 13.345 34.936l104.5-8.562c-.358-6.42-.452-12.835-.28-19.188L38.187 220.72zm435.502 0l-117.563 7.186c.172 6.353.077 12.768-.28 19.188l104.5 8.562c5.3-11.91 9.825-23.702 13.342-34.937zm-315.844 45l-97.72 8c5.446 10.777 11.426 21.472 17.782 31.81l84.063-18.28c-1.735-7.117-3.12-14.322-4.126-21.53zm196.187 0c-1.003 7.207-2.36 14.414-4.092 21.53l84.03 18.28c6.357-10.338 12.338-21.033 17.782-31.81l-97.72-8zM167.19 305.25L88.75 322.313c6.694 9.8 13.67 19.05 20.75 27.468l64.938-26.342c-2.725-5.955-5.143-12.023-7.25-18.188zm177.5 0c-2.107 6.166-4.527 12.232-7.25 18.188l64.937 26.343c7.08-8.415 14.056-17.666 20.75-27.467l-78.438-17.063z',
  		
  		'Banner': 'M52.934,6.136c0-3.324-2.684-6.053-6-6.126V0h-36.91c-3.358,0-6.09,2.731-6.09,6.09v50.778l19-12.666l19,12.666V25h11V6.136 z M39.934,53.132l-17-11.334l-17,11.334V6.09c0-2.255,1.835-4.09,4.09-4.09H42.04c-0.983,0.962-1.682,2.212-1.965,3.611 l-0.001,0.003c-0.045,0.222-0.08,0.448-0.103,0.677C39.947,6.524,39.934,6.761,39.934,7v18V53.132z M50.934,23h-9V7 c0-0.34,0.035-0.671,0.1-0.992c0.387-1.89,1.858-3.399,3.728-3.855c0.036-0.009,0.068-0.025,0.104-0.032 c0.243-0.054,0.498-0.073,0.753-0.089c0.083-0.005,0.162-0.024,0.246-0.025c2.246,0.037,4.069,1.881,4.069,4.129V23z'
	},
	'treasure': {
		'coin': 'M253.95 71.932c-65.823 0-125.256 18.536-167.708 47.875-42.452 29.338-67.637 68.846-67.637 111.89 0 43.045 25.184 82.552 67.635 111.89 42.452 29.34 101.886 47.874 167.71 47.874 65.826 0 125.26-18.533 167.712-47.872 42.452-29.34 67.64-68.846 67.64-111.89 0-43.045-25.188-82.553-67.64-111.89-42.452-29.34-101.886-47.876-167.71-47.876zm1.704 21.187h.153l1.084.01-.154 18.686-1.002-.007-4.937.038-.043.002-5.063.125h-.026l-4.88.203-2.11.12-1.076-18.657 2.2-.126.075-.004.076-.004 5.1-.21.075-.003.078-.002 5.133-.126.076-.002h.076l5.166-.043zm20.373.646l.702.04.077.005.076.004 5.027.375.076.003.077.008 4.988.454.08.008.075.008 4.947.53.078.01.077.01 2.937.366-2.307 18.545-2.878-.357-.06-.007-4.64-.498-.046-.004-4.927-.448-.016-.002-4.802-.355-.617-.036 1.077-18.658zm-57.66 1.552l2.307 18.547-4.1.51-.02.002-4.63.654-4.586.728-.055.01-4.623.812-3.234-18.408 4.678-.822.076-.014.078-.012 4.818-.763.078-.01.076-.013 4.864-.685.078-.012.076-.01 4.12-.512zm95.95 3.29l2.693.523.078.015.076.017 4.676.984.078.018.078.018 4.623 1.056.077.018.078.02 4.57 1.128.08.02.077.02 1.662.44-4.793 18.065-1.503-.4-.027-.01-4.47-1.1-4.526-1.036-.016-.004-4.433-.933-2.622-.506 3.545-18.35zm-133.766 3.69l4.48 18.143-.407.103-.027.006-4.285 1.138-4.22 1.197h-.002l-4.242 1.285-.045.014-4.075 1.316-5.74-17.787 4.12-1.33.08-.026.08-.023 4.403-1.336.078-.023.08-.024 4.46-1.264.08-.024.077-.02 4.516-1.2.077-.018.08-.02.434-.107zm171.137 6.165l2.456.842.082.027.078.03 4.222 1.533.08.03.08.028 4.16 1.598.08.03.08.033 4.093 1.66.082.032.08.035 2.51 1.072-7.344 17.186-2.348-1.004-.04-.018-3.892-1.578-.058-.023-4.074-1.563-.026-.01-3.974-1.44-2.385-.817 6.058-17.682zm-208.003 6.1l7.343 17.185-3.343 1.428-.045.02-3.85 1.732-3.685 1.744-3.587 1.785-.055.027-1.692.885-8.66-16.56 1.747-.915.082-.043.083-.04 3.815-1.902.084-.04.082-.04 3.887-1.84.083-.04.082-.036 3.96-1.78.08-.038.08-.035 3.51-1.498zm243.587 9.248l.08.042.084.044.082.045 3.67 2.015.084.047.082.05 3.593 2.067.084.048.083.05 3.516 2.126.083.052.086.053 3.432 2.177.086.055.086.056 1.744 1.16-10.35 15.563-1.667-1.108-3.31-2.098-.03-.02-3.282-1.982-3.43-1.975-3.453-1.896-.016-.007-.09-.05 2.386-4.34 6.365-12.172zm-277.98 8.78l6.73 10.613 3.388 5.098-3.27 2.177-3.103 2.162-3.062 2.243-.034.023-2.84 2.184-2.05 1.65-11.73-14.55 2.133-1.72.086-.068.087-.068 3.102-2.38.084-.067.088-.065 3.188-2.332.086-.062.086-.06 3.27-2.282.087-.06.085-.057 3.354-2.232.085-.056.085-.055.06-.037zm310.696 13.123l2.14 1.81.087.075.086.076 2.835 2.525.088.077.086.082 2.743 2.568.088.084.087.084 2.65 2.615.088.087.086.09 2.555 2.656.088.092.086.094.62.682-13.818 12.582-.54-.592-2.384-2.478-2.455-2.424-2.555-2.395-2.74-2.437-.037-.033-1.962-1.66 12.078-14.262zM78.72 157.648l13.47 12.954-.8.834-2.275 2.5-2.164 2.515-2.093 2.577-1.98 2.588-1.71 2.375-15.173-10.912 1.777-2.47.082-.114.085-.11 2.16-2.82.08-.11.087-.104 2.26-2.782.083-.103.088-.1 2.36-2.742.084-.098.087-.095 2.46-2.7.083-.095.087-.092.862-.895zm185.735 4.248l1.55 1.833 35.733 71.135-37.28-44.043-27.35 32.307-15.858-10.19 36.074-42.618 7.13-8.426zM122.81 173.748l8.147 3.397 89.818 57.7-68.3-28.478 26.457 85.422 85.527 6.265 85.895-6.23-9.384 19.42-76.517 5.548-99.6-7.295-42.042-135.75zm284.19.096l-.67 2.164-54.47 112.71 25.533-82.447-57.243 23.615-8.412-16.746L407 173.843zm39.854 1.256l1.01 1.498.08.12.08.124 1.845 2.933.077.125.076.13 1.74 2.968.075.13.072.136 1.63 3.002.073.136.07.14 1.518 3.036.07.14.068.147 1.32 2.88-16.99 7.784-1.246-2.718-1.385-2.77-1.49-2.747-1.59-2.715-1.646-2.617-.955-1.42 15.5-10.443zM55.707 190.78L72.7 198.56l-.93 2.028-1.166 2.803-1.04 2.767-.953 2.84-.848 2.873-.69 2.71-18.11-4.622.733-2.876.043-.168.05-.166.94-3.186.05-.164.052-.162 1.06-3.158.053-.16.06-.156 1.175-3.13.058-.154.063-.152 1.29-3.1.062-.148.07-.148.985-2.153zm407.344 21.634l.317 1.463.037.174.032.175.574 3.263.03.178.024.178.45 3.287.025.18.017.18.322 3.31.016.18.012.182.196 3.332.01.182.003.183.065 3.353.004.182-.004.18-.01.542-18.686-.363.006-.354-.056-2.984-.176-3.008-.29-2.94-.402-2.94-.5-2.84-.287-1.336 18.27-3.938zM46.315 230.59l18.686.363-.027 1.442.056 2.976.175 3.005.29 2.953.403 2.94.502 2.85.055.26-18.27 3.938-.087-.404-.037-.174-.03-.175-.575-3.264-.03-.177-.025-.178-.45-3.287-.024-.18-.018-.18-.322-3.31-.018-.18-.01-.18-.197-3.335-.008-.182-.004-.18-.065-3.354-.004-.18.003-.183.03-1.623zm398.24 18.904l18.27 3.938-.156.718-.037.172-.042.17-.82 3.213-.04.168-.052.166-.94 3.185-.048.164-.053.16-1.06 3.157-.054.16-.057.158-1.176 3.13-.058.154-.064.15-1.293 3.1-.062.15-.066.147-.537 1.17-16.99-7.785.476-1.043 1.16-2.786 1.055-2.803.946-2.82.85-2.876.732-2.875.117-.546zM71.505 263.56l.267.643 1.28 2.797 1.375 2.748 1.488 2.744 1.605 2.74 1.652 2.622.334.496-15.5 10.443-.404-.602-.082-.12-.08-.125-1.844-2.93-.078-.128-.077-.13-1.737-2.966-.076-.132-.072-.133-1.63-3.002-.073-.138-.07-.14-1.518-3.034-.07-.142-.067-.144-1.406-3.067-.066-.148-.062-.15-.338-.81 17.252-7.19zm359.244 16.585l15.5 10.443-.338.5-.08.117-.082.115-2.057 2.86-.082.113-.083.11-2.158 2.822-.085.107-.086.107-2.26 2.78-.085.104-.085.1-2.36 2.742-.086.098-.088.095-2.457 2.7-.087.092-.088.092-.11.115-10.98-10.557-2.556-2.326.06-.07.03-.028 2.27-2.495 2.2-2.553 2.087-2.572 2.004-2.617 1.872-2.602.268-.395zm-340.594 11.85l1.27 1.394 2.38 2.475 2.454 2.42 2.597 2.434 2.66 2.364 1.213 1.03-12.078 14.263-1.312-1.11-.088-.078-.086-.077-2.836-2.523-.088-.08-.086-.08-2.744-2.57-.088-.083-.086-.086-2.65-2.612-.088-.086-.086-.09-2.555-2.658-.09-.092-.084-.093-1.35-1.482 13.82-12.584zM19.52 300.64c1.657 12.822 5.554 25.25 11.478 37.098v-20.302c-4.22-5.423-8.05-11.03-11.478-16.795zm468.863.006c-4.43 7.45-9.534 14.63-15.27 21.497v22.634c8.07-13.928 13.28-28.747 15.27-44.13zm-81.127 4.72l11.73 14.552-2.976 2.398-.086.07-.088.067-3.102 2.383-.086.066-.087.063-3.187 2.334-.086.06-.086.062-3.27 2.28-.086.06-.086.058-2.512 1.67-10.35-15.562 2.432-1.615 3.06-2.135 3.012-2.203 2.963-2.276 2.893-2.333zm-290.49 9.363l2.568 1.707 3.246 2.06 3.338 2.017 3.465 1.996 2.69 1.476-8.995 16.383-2.8-1.538-.083-.047-.084-.047-3.59-2.07-.086-.05-.082-.05-3.516-2.125-.086-.05-.084-.053-3.436-2.178-.085-.055-.084-.056-2.644-1.757 10.35-15.564zm260.884 10.188l8.66 16.56-2.705 1.415-.082.043-.084.043-3.817 1.897-.082.04-.08.04-3.89 1.842-.08.038-.084.037-3.957 1.78-.08.038-.083.034-2.512 1.074-7.345-17.185 2.48-1.06.03-.014 3.732-1.68 3.682-1.743 3.724-1.853.033-.018 2.54-1.328zm-229.605 6.848l3.47 1.482.034.014 3.88 1.572.05.02 3.915 1.5 4.056 1.474 1.363.467-6.057 17.68-1.436-.493-.08-.027-.08-.03-4.22-1.53-.083-.03-.08-.03-4.158-1.597-.08-.03-.08-.034-4.095-1.658-.08-.034-.082-.035-3.504-1.496 7.345-17.184zm-98.357 6.203v27.827c5.04 5.95 10.644 11.676 16.77 17.146v-30.66c-5.92-4.545-11.517-9.326-16.77-14.314zm294.917 1.024l6.057 17.682-.803.275-.08.03-.08.024-4.345 1.402-.078.026-.08.023-4.402 1.334-.08.024-.078.022-4.46 1.268-.08.02-.077.022-3.903 1.036-4.793-18.065 3.744-.992.053-.016 4.382-1.245.027-.008 4.23-1.285.015-.004 4.11-1.326.72-.248zm109.82 2.48c-5.276 4.76-10.873 9.318-16.77 13.65v31.118c6.078-5.145 11.676-10.533 16.77-16.133v-28.635zm-272.376 2.09l2.675.707.03.01 4.337 1.068 4.387 1.006.034.007 4.554.962 1.563.3-3.544 18.35-1.633-.314-.078-.015-.076-.016-4.677-.986-.078-.015-.076-.018-4.626-1.056-.078-.02-.078-.016-4.57-1.13-.08-.02-.077-.02-2.704-.717 4.793-18.065zm127.66 4.47l3.544 18.35-.97.186-.075.016-.08.014-4.77.837-.08.014-.077.013-4.818.764-.076.01-.08.013-4.863.688-.076.01-.077.01-3.043.378-2.307-18.545 2.89-.358.018-.002 4.787-.678.058-.008 4.51-.715.055-.01 4.68-.823.036-.006.813-.157zm-92.255 2.49l3.95.49.058.007 4.64.5.057.007 4.776.436.02.002 4.632.344-1.383 18.637-4.652-.345-.076-.008-.08-.006-4.985-.455-.078-.006-.076-.008-4.95-.534-.076-.008-.076-.01-4.01-.498 2.31-18.547zm56.414 1.904l1.075 18.658-3.28.19-.077.003-.076.003-5.1.21-.076.003-.076.002-5.133.125-.078.002-.077.002-5.166.04-.077-9.343-.076 9.344-2.162-.018.154-18.687 2.084.017 4.936-.04.043-.002 4.935-.12h.01l5.023-.207 3.19-.182zM85.145 365.21v32.49c.367.258.725.52 1.094.775 5.838 4.034 12.007 7.855 18.46 11.46v-33.69c-6.772-3.45-13.3-7.132-19.554-11.034zm333.82 2.33c-6.267 3.756-12.793 7.296-19.552 10.61v33.862c6.84-3.666 13.367-7.58 19.55-11.717V367.54zm-295.58 17.388v34.445c6.74 3.066 13.728 5.906 20.944 8.5v-35.06c-7.17-2.402-14.16-5.032-20.943-7.885zm257.34 1.55c-6.793 2.745-13.78 5.27-20.943 7.57v35.155c7.205-2.477 14.193-5.194 20.942-8.14V386.48zm-217.708 11.96v35.453c6.6 1.89 13.352 3.588 20.248 5.07v-35.774c-6.872-1.388-13.626-2.973-20.248-4.748zm178.076.996c-6.625 1.69-13.38 3.188-20.246 4.494v35.812c6.885-1.392 13.643-2.986 20.246-4.783v-35.523zm-139.14 6.99v35.967c6.87 1.06 13.854 1.92 20.942 2.56v-36.118c-7.074-.6-14.058-1.41-20.943-2.408zm100.204.525c-7.34.983-14.785 1.758-22.332 2.29v36.135c7.557-.566 15.01-1.37 22.332-2.412V406.95zm-60.572 2.988v36.19c4.094.146 8.217.22 12.365.22 2.406 0 4.8-.033 7.187-.082v-36.192c-2.388.046-4.782.074-7.186.074-4.144 0-8.266-.074-12.364-.21z',
		
		'coinPile': 'M251.813 20.5c-.78-.008-1.558.003-2.344.03-11.005.39-22.285 5.142-32.376 17.814l-5.156 6.468-7.063-4.343c-13.67-8.436-30.948-11.566-45.5-8.75-14.552 2.814-26.03 10.716-31.344 25.374l-3.624 9.968L115 62.22c-16.243-8.34-24.717-8.468-31.75-5.314-5.606 2.515-11.456 8.555-18.094 17.375L147.594 138c12.92 4.168 31.79 4.086 50.75-.813 18.95-4.895 37.863-14.44 51.625-27.406l31.124-76.905c-6.596-6.452-16.42-11.52-26.938-12.28-.778-.058-1.563-.087-2.344-.095zM265 121.28l-.594.595c-16.8 16.497-39.04 27.636-61.375 33.406-6.883 1.78-13.784 3.075-20.56 3.814-3.682 6.112-6.727 12.262-9.19 18.47l.532-.033c1.4 24.178 11.835 42.98 26.75 60.876l-14.343 11.97c-8.29-9.947-15.738-20.762-21.282-32.814-.92 23.227 4.222 47.218 12.78 72.22l-17.687 6.062c-15.615-45.618-20.942-92.383 1-136.375-7.386-.588-14.426-1.96-20.905-4.25l-.344-.126c-4.26 4.08-8.35 8.368-12.25 12.875-31.64 36.583-49.03 85.3-39.936 123.25 4.87 20.324 13.632 39.513 26.156 55.874 3.653-.298 7.256-.49 10.78-.53 11.585-.138 22.4 1.094 32.032 3.623 3.04.798 5.98 1.776 8.813 2.875 7.484-.797 15.245-1.218 23.22-1.218 28.474 0 54.303 5.297 73.843 14.47 7.586 3.56 14.44 7.848 20 12.81-.047-.742-.063-1.493-.063-2.25 0-4.568.85-8.905 2.438-13-8.938-8.382-14.532-18.546-14.532-30.187 0-16.12 10.75-29.346 26.22-39 .012-4.624.893-9.02 2.53-13.156-10.165-8.73-16.655-19.555-16.655-32.092 0-7.917 2.594-15.142 7.063-21.594-4.47-6.452-7.063-13.677-7.063-21.594 0-3.813.598-7.456 1.72-10.938-9.688-8.603-15.814-19.182-15.814-31.375 0-12.108 6.054-22.594 15.626-31.156-5.94-4.6-12.232-8.505-18.906-11.5zm111.438 2.345c-26.022 0-49.507 5.433-65.688 13.563-16.18 8.13-23.78 18.062-23.78 26.75 0 8.687 7.6 18.65 23.78 26.78 16.18 8.13 39.666 13.532 65.688 13.532 11.222 0 21.978-1.018 31.875-2.813v-17.03c13.862-2.068 25.41-5.9 32.812-10.782v17.563c.328-.16.678-.307 1-.47 16.18-8.13 23.813-18.093 23.813-26.78 0-8.687-7.632-18.62-23.813-26.75-16.18-8.13-39.666-13.563-65.688-13.563zm96.5 67.625c-3.334 3.582-7.283 6.86-11.657 9.844l.25 29.03c12.545-7.523 18.5-16.197 18.5-23.874 0-4.788-2.31-9.965-7.092-15zm-171.844 15.47c.265 8.576 7.887 18.325 23.78 26.31 16.182 8.13 39.667 13.532 65.688 13.532 16.316 0 31.636-2.13 44.782-5.718l.625-27.28c-17.166 6.025-37.58 9.374-59.533 9.374-28.558 0-54.474-5.69-74.062-15.532-.435-.218-.852-.464-1.28-.687zm1.97 34.81c-1.345 2.694-2.002 5.352-2.002 7.907 0 8.688 7.632 18.652 23.813 26.782 16.18 8.13 39.666 13.53 65.688 13.53 13.194 0 25.73-1.384 37-3.813v-24.062c-11.556 2.212-24.002 3.375-37 3.375-28.56 0-54.506-5.69-74.094-15.53-4.828-2.426-9.34-5.17-13.408-8.19zm174.967 0c-4.067 3.02-8.58 5.764-13.405 8.19-1.382.693-2.806 1.346-4.25 2V274c13.335-7.677 19.656-16.654 19.656-24.563 0-2.548-.662-5.218-2-7.906zm7.5 36.75c-2.03 2.028-4.236 3.956-6.624 5.783v32.468c10.314-7.004 15.25-14.77 15.25-21.75 0-5.266-2.816-10.994-8.625-16.5zm-170.124 14.064c-.13.817-.22 1.64-.22 2.437.002 8.69 7.633 18.62 23.814 26.75 16.18 8.13 39.666 13.564 65.688 13.564 14.953 0 29.064-1.775 41.437-4.844v-29.875c-16.304 5.196-35.265 8.063-55.563 8.063-28.558 0-54.505-5.69-74.093-15.532-.36-.18-.708-.378-1.064-.562zm-13.594 21.312c-8.665 6.538-12.843 13.626-12.843 20.03 0 8.69 7.63 18.653 23.81 26.783 16.182 8.13 39.667 13.53 65.69 13.53 9.54 0 18.72-.71 27.342-2.03v-18.19c-.377.003-.747 0-1.125 0-28.558 0-54.505-5.688-74.093-15.53-12.46-6.26-22.86-14.558-28.78-24.594zm162.532 30.688c-7.93 2.796-16.566 5.006-25.72 6.594V363c1.92-.813 3.78-1.65 5.532-2.53 9.82-4.935 16.47-10.537 20.188-16.126zM473.5 362.5c-3.77 3.77-8.21 7.184-13.125 10.25v28.688c13.335-7.678 19.656-16.655 19.656-24.563 0-4.59-2.138-9.537-6.53-14.375zm-348.72 2.813c-10.14.115-21.222 1.413-32.624 4.062-22.803 5.3-42.462 15.006-55.25 25.688-12.788 10.68-17.74 21.388-16.28 29.125 1.46 7.736 9.393 14.833 24.78 18.875 15.388 4.04 36.854 4.204 59.657-1.094 9.19-2.136 17.857-4.97 25.78-8.314V413.03c14.53-6.486 25.467-14.375 30.376-21.905V415.5c12.102-10.422 16.83-20.828 15.405-28.375-1.46-7.735-9.425-14.802-24.813-18.844-7.693-2.02-16.89-3.083-27.03-2.967zm64.657 5.218c2.71 3.895 4.61 8.28 5.532 13.158 1.128 5.983.634 11.85-1.126 17.53 9.822 2.56 18.812 6.073 26.656 10.47 4.39 2.46 8.47 5.268 12.125 8.343 9.022-2.163 16.573-5.152 21.938-8.686v20.53c16.183-7.61 23.5-16.89 23.5-24.312 0-7.43-7.334-16.726-23.563-24.343-16.054-7.537-39.295-12.58-65.063-12.69zm111.72 4.94c-.044.467-.094.944-.094 1.405 0 8.688 7.63 18.65 23.812 26.78 16.18 8.13 39.666 13.533 65.688 13.533 13.194 0 25.73-1.384 37-3.813V386.53c-14.77 4-31.43 6.19-49.094 6.19-28.56 0-54.507-5.72-74.095-15.564-1.086-.546-2.165-1.11-3.22-1.687zM304 412.81c-1.958 3.257-2.938 6.484-2.938 9.563 0 8.688 7.632 18.65 23.813 26.78 16.18 8.13 39.666 13.533 65.688 13.533 13.194 0 25.73-1.384 37-3.813V432.5c-11.556 2.212-24.002 3.375-37 3.375-28.56 0-54.506-5.69-74.094-15.53-4.47-2.246-8.643-4.777-12.47-7.533zm173.125 0c-3.832 2.762-8.025 5.283-12.5 7.532-1.382.694-2.806 1.347-4.25 2v24.594c13.335-7.678 19.656-16.655 19.656-24.563 0-3.077-.953-6.308-2.905-9.563zM184.5 418.22c-3.47 4.383-7.572 8.55-12.188 12.405-15.66 13.082-37.66 23.643-63 29.53-9.14 2.125-18.11 3.472-26.75 4.126 3.2 5.317 8.83 10.542 17.063 15.158 13.698 7.677 33.69 12.843 55.875 12.843 10.077 0 19.68-1.084 28.47-2.967v-20.844c13.858-2.068 25.41-5.903 32.81-10.783v18.407c10.023-6.95 14.845-14.89 14.845-22.375 0-8.723-6.552-18.043-20.25-25.72-7.35-4.12-16.532-7.518-26.875-9.78z',
		
		'gem': 'M247 25.076L107.053 130.004l64.996 32.486L247 106.297v-81.22zm18 0v81.22l74.95 56.194 65-32.488L265 25.076zm9.277 22.307l36.63 26.437c-25.125-4.207-29.74 9.2-37.348 28.8l.717-55.237zm-37.79 3.926l-.274 33.362c-22.052 1.182-56.787 14.423-107.893 43.99L236.488 51.31zM256 122.044l-74 55.48v156.948l74 55.482 74-55.482V177.527l-74-55.482zm4.215 17.67c-37.503 33.84-60.642 164.833-63.65 199.094l-.35-151.095 64-48zM99 146.1v219.8l65-32.488V178.588L99 146.1zm314 0l-65 32.488v154.824l65 32.488V146.1zm-301.352 23.31l40.473 20.83c-46.28 38.757-30.79 122.693-41.876 162.572l1.404-183.402zm60.4 180.1l-64.995 32.486L247 486.924v-81.22l-74.95-56.194zm167.903 0L265 405.703v81.22l139.947-104.927-64.996-32.486zm-169.415 17.172c-19.594 16.282-16.745 24.365 4.477 54.412l-44.246-38.018 39.77-16.394z'
	}
};

export default mapIcon;