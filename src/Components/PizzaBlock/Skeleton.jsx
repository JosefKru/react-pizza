import ContentLoader from 'react-content-loader'

const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={285}
    height={496}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="134" cy="125" r="125" />
    <rect x="0" y="269" rx="10" ry="10" width="280" height="23" />
    <rect x="0" y="316" rx="15" ry="15  " width="280" height="88" />
    <rect x="0" y="433" rx="10" ry="10" width="95" height="32" />
    <rect x="130" y="425" rx="24" ry="24" width="152" height="45" />
  </ContentLoader>
)

export default Skeleton
