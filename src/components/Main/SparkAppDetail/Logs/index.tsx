import React, { useState } from 'react'
import styled from 'styled-components'
import { CodeBlock, a11yLight } from "react-code-blocks"
import Loader from 'components/Common/Loader'
import Button from 'components/Common/Button'

const Wrapper = styled.div`
  font-size: 0.8em;
`
const JustifyCenter = styled.div`
  display: flex;
  justify-content: center;
`
interface Props {
  logs: string,
}

const Logs = (props: Props) => {
  const { logs } = props
  const [logLimit, setLogLimit] = useState<number>(5000)
  const moreLogs = () => setLogLimit(logLimit + 10000)

  return (
    <Wrapper>
      <h3>Logs:</h3>
      {logs ? <CodeBlock
        text={logs.substring(0, logLimit)}
        language='json'
        showLineNumbers={false}
        theme={a11yLight}
        /> : <Loader height={'none'} />}

      <JustifyCenter onClick={() => moreLogs()}>
        <Button title="load more" />
      </JustifyCenter>
    </Wrapper>
  )
}

export default Logs