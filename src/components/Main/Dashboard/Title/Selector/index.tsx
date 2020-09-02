import React, { useRef, useEffect, useState } from 'react'
import { AppState } from 'store'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { setShowFilter } from 'store/spark_apps/actions'
import { SparkAppState } from 'store/spark_apps/types'
import Checkbox from 'components/Common/Checkbox'
import { getShowFilter } from 'store/spark_apps/selectors'
import { SparkAppStateColor } from 'store/spark_apps/types'
import titleCase from 'utils/titleCase'

const Sort = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 220px;
  height: 38px;
  box-shadow: 0 0 7px rgba(41, 41, 50, 0.1);
  border-radius: 8px;
  background-color: white;
  cursor: pointer;
`
const Select = styled.div`
  position: absolute;
  width: 199px;
  left: 0;
  top: 39px;
  padding-bottom: 20px;
  background: white;
  border: 1px solid #f1f1f5;
  box-shadow: 0 5px 15px rgba(68, 68, 79, 0.1);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  z-index: 1;
`
const ArrowWrapper = styled.div`
  height: 100%;
  width: 30px;
  border-left: 1px solid #f1f1f5;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Arrow = styled.div`
  height: 0;
  width: 0;
  border: solid #92929d;
  border-width: 0 2px 2px 0;
  display: flex;
  padding: 3px;
`
const ArrowDown = styled(Arrow)`
  transform: rotate(45deg);
`
const ArrowUp = styled(Arrow)`
  transform: rotate(135deg);
`
const ShowWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 0 0 20px;
`
const Show = styled.span`
  font-size: 14px;
  letter-spacing: 0.5px;
  color: #696974;
`
const What = styled.span`
  font-size: 14px;
  letter-spacing: 0.1px;
  color: #44444f;
  margin-left: 10px;
`

interface IContentTitleProps {
  setShowFilter: typeof setShowFilter
  showState: SparkAppState[]
}

const Selector: React.FC<IContentTitleProps> = props => {
  const { showState, setShowFilter } = props
  const [opened, setOpened] = useState<boolean>(false)
  const wrapperRef = useRef<HTMLInputElement>(null);

  
  //  Alert if clicked on outside of element
  useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {        
          if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
              setOpened(() => false)
          }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
          document.removeEventListener("mousedown", handleClickOutside);
      };
  }, [wrapperRef]);

  const handleOpened = (e: React.ChangeEvent<any>): void => {
    if (e.target === e.currentTarget) {
      setOpened(prevState => !prevState)
    }
  }

  const handleOpenedSimple = (): void => {
    setOpened(prevState => !prevState)
  }

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value as SparkAppState
    const newFilters = showState.filter(f => f !== value);
    if (newFilters.length === showState.length) newFilters.push(value)
    setShowFilter(newFilters)
  }

  const checkBoxes = Object.values(SparkAppState).map(v => <Checkbox
    handleCheckbox={handleCheckbox}
    value={v}
    name={v}
    key={v}
    checked={showState.includes(v)}
    color={SparkAppStateColor[v]}
  />)

  const filterText = showState.length === 0
    ? 'Nothing'
    : `${titleCase(showState[showState.length - 1])} ${showState.length > 1 ? `+${showState.length - 1}` : ''}`

  return (
    <Sort onClick={handleOpened} ref={wrapperRef}>
      <ShowWrapper onClick={handleOpenedSimple}>
        <Show>Show:</Show>
        <What>{filterText}</What>
      </ShowWrapper>
      <ArrowWrapper onClick={handleOpenedSimple}>
        {opened ? <ArrowDown /> : <ArrowUp />}
      </ArrowWrapper>
      {opened && (
        <Select>
          {checkBoxes}
        </Select>
      )}
    </Sort>
  )
}

const mapStateToProps = (state: AppState) => {
  return { showState: getShowFilter(state) }
}

const mapDispatchToProps = {
  setShowFilter
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Selector)
