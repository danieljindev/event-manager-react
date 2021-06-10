import React from 'react'
import { experimentalStyled } from '@material-ui/core'
import { HashLoader } from 'react-spinners'
import { css } from '@emotion/react'

interface LoadingProps {
  loading: boolean
}
const Loading: React.FC<LoadingProps> = ({ loading }) => (
  <CenterContainer>
    <HashLoader color="#36D7B7" loading={loading} size={100} />
  </CenterContainer>
)

export default Loading

const CenterContainer = experimentalStyled('div')({
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
})

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`
