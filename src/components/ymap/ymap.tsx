'use client';

import {
  YMap,
  YMapDefaultSchemeLayer,
  YMapDefaultFeaturesLayer,
  YMapComponentsProvider,
  YMapDefaultMarker,
  YMapHint,
  YMapHintContext,
} from "ymap3-components";
import styles from "./ymap.module.scss";
import { useCallback, useContext } from "react";


const location = { center: [58.790799, 53.440109], zoom: 4 }; 

const Points = [
    {
        id: "0",
        coordinates: [37.583760, 55.381915],
        properties: {
            hint: {
                title: 'ООО «Траклайн»',
                content: `
                    <dl>
                        <div>
                            <dt>Адрес:</dt>
                            <dd>МО, г.о. Подольск, д. Коледино, 30А</dd>
                        </div>
                        <div>
                            <dt>Телефон:</dt>
                            <dd>+7 (499) 677-65-43</dd>
                        </div>
                    </dl>
                `
            }
        }
    },
    {
        id: "1",
        coordinates: [39.027268, 45.135706],
        properties: {
            hint: {
                title: 'ООО «ЮРТО-ТРАК»',
                content: `
                    <dl>
                        <div>
                            <dt>Адрес:</dt>
                            <dd>350010, г. Краснодар, ул. Ростовское шоссе, д. 47</dd>
                        </div>
                        <div>
                            <dt>Телефон:</dt>
                            <dd>+7 (928) 404-90-20, +7 (861) 225-93-75</dd>
                        </div>
                        <div>
                            <dt>Сайт:</dt>
                            <dd><a href="https://urto-truck.ru/">https://urto-truck.ru</a></dd>
                        </div>
                    </dl>
                `
            }
        }
    },
    {
        id: "2",
        coordinates: [82.904788, 55.032731],
        properties: {
            hint: {
                title: 'ООО «Сибирские прицепы»',
                content: `
                    <dl>
                        <div>
                            <dt>Адрес:</dt>
                            <dd>630004, г. Новосибирск, ул. Комсомольский проспект, 13/1, оф. 503</dd>
                        </div>
                        <div>
                            <dt>Телефон:</dt>
                            <dd>+7 (913) 013- 11-69, +7(913) 200-00-24</dd>
                        </div>
                        <div>
                            <dt>Сайт:</dt>
                            <dd><a href="https://sibtrailers.ru">https://sibtrailers.ru</a></dd>
                        </div>
                        <div>
                            <dt>Email:</dt>
                            <dd>sergboss12@mail.ru, siberiantrailers@mail.ru</dd>
                        </div>
                    </dl>
                `
            }
        }
    }
];

const Map = () => {
    function HintWindow() {
        const hintContext = useContext(YMapHintContext) as unknown as {
            hint: {
                title: string;
                content: string;
            };
        };

        return (
            hintContext && (
                <div className={styles.hintWindow}>
                    <div className={styles.hintWindowTitle}>{hintContext.hint.title}</div>
                    <div className={styles.hintWindowContent} dangerouslySetInnerHTML={{__html: hintContext.hint.content}} />
                </div>
            )
        );
    }

    const getHint = useCallback((object: any) => object?.properties?.hint, []);
   
    return (
        <>
            <div className={styles.mapContainer}>
                <YMapComponentsProvider apiKey='cac5b520-ec6d-4f80-b8a5-eb55d0da1f0a'>
                    <YMap location={location}>
                        <YMapDefaultSchemeLayer />
                        <YMapDefaultFeaturesLayer />
                        <YMapHint hint={getHint}>
                            <HintWindow />
                        </YMapHint>
                        
                        {
                            Points.map((point, index) => (
                                // @ts-ignore
                                <YMapDefaultMarker key={index} {...point} />
                            ))
                        }
                    </YMap>
                </YMapComponentsProvider>
            </div>        
        </>
    )
}

export default Map;