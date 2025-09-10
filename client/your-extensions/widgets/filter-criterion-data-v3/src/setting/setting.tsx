/** @jsx jsx */
/**
  Licensing

  Copyright 2022 Esri

  Licensed under the Apache License, Version 2.0 (the "License"); You
  may not use this file except in compliance with the License. You may
  obtain a copy of the License at
  http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
  implied. See the License for the specific language governing
  permissions and limitations under the License.

  A copy of the license is available in the repository's
  LICENSE file.
*/
import { React, FormattedMessage, css, jsx } from 'jimu-core'
import { type AllWidgetSettingProps } from 'jimu-for-builder'
import {
  MapWidgetSelector,
  SettingSection,
  SettingRow
} from 'jimu-ui/advanced/setting-components'
import { type IMConfig } from '../config'
import defaultI18nMessages from './translations/default'
import styles from './styles.module.css'

export default function (props: AllWidgetSettingProps<IMConfig>) {
  const onMapWidgetSelected = (useMapWidgetIds: string[]) => {
    props.onSettingChange({
      id: props.id,
      useMapWidgetIds: useMapWidgetIds
    })
  }

  // const onP1Change = (evt: React.FormEvent<HTMLInputElement>) => {
  //   props.onSettingChange({
  //     id: props.id,
  //     config: props.config.set('p1', evt.currentTarget.value)
  //   })
  // }

  // const onP2Change = (evt: React.FormEvent<HTMLInputElement>) => {
  //   props.onSettingChange({
  //     id: props.id,
  //     config: props.config.set('p2', evt.currentTarget.value)
  //   })
  // }

  // const onP3Change = (evt: React.FormEvent<HTMLInputElement>) => {
  //   props.onSettingChange({
  //     id: props.id,
  //     config: props.config.set('p3', evt.currentTarget.value)
  //   })
  // }    
  
  return (
    <div>
      <div className="widget-setting-get-map-coordinates">
        <SettingSection
          className="map-selector-section"
          title={props.intl.formatMessage({
            id: 'mapWidgetLabel',
            defaultMessage: defaultI18nMessages.selectMapWidget
          })}
        >
          <SettingRow>
            <MapWidgetSelector
              onSelect={onMapWidgetSelected}
              useMapWidgetIds={props.useMapWidgetIds}
            />
          </SettingRow>
        </SettingSection>
      </div>
      {/* <div>
        <SettingSection>
          <SettingRow>
          
            <div>
              <FormattedMessage id="p1" defaultMessage={defaultI18nMessages.p1}/>: 
              <input defaultValue={props.config.p1} onChange={onP1Change}/>
          </div>
          </SettingRow>
          <SettingRow>
          <div>
            <FormattedMessage id="p2" defaultMessage={defaultI18nMessages.p2}/>: 
            <input defaultValue={props.config.p2} onChange={onP2Change}/>            
          </div>         
          </SettingRow>
          <SettingRow>
          <div>
            <FormattedMessage id="p3" defaultMessage={defaultI18nMessages.p3}/>: 
            <input defaultValue={props.config.p3} onChange={onP3Change}/>            
          </div>         
          </SettingRow>
          <SettingRow>
          <div className={styles.format_text}>
              {defaultI18nMessages.exemplo_link}
          </div>       
          </SettingRow>
        </SettingSection>
      </div> */}
    </div>
    

  )
};
