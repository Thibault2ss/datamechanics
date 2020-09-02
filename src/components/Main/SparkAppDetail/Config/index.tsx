import React from 'react'
import styled from 'styled-components'
import { CopyBlock, nord } from "react-code-blocks";


const Config = styled.div`
  font-size: 0.8em;
`
interface Props {
  jsonConfig: string,
}

const SparkConfig = (props: Props) => {
  const { jsonConfig } = props

  return (
    <Config>
      <h2>Config</h2>
      <CopyBlock
        text={jsonConfig}
        language='json'
        theme={nord}
        />
    </Config>
  )
}

export default SparkConfig