import React from 'react';
import styles from './About.module.css';
import screen1 from "../../img/Screenshot_1.png";
import screen2 from "../../img/Screenshot_2.png";
import screen3 from "../../img/Screenshot_3.png";
import screen5 from "../../img/Screenshot_5.png";
import screen6 from "../../img/Screenshot_6.png";


const About = () => {

    return (
        <div className={styles.mainDiv}>
            <div className={styles.title}>This is test web-site to learn <b>URL</b> and <b>UrlSearchParams</b>.</div>

            <div className={styles.urlSearchParams}>
                <div className={styles.title}><b>UrlSearchParams:</b></div>
                <div className={styles.paragraph}>
                    Щоб достукатись до функцій потрібно: <b>url + searchParams + functionName <br/>
                    Example: <br/>
                    <div style={{background: "Silver", fontFamily: "Consolas"}}>
                        url = 'https://developer.mozilla.org/ru/docs/Web/API/URLSearchParams'; <br/>
                        url.searchParams.append('myKey', 'myValue');
                    </div>
                </b> <br/>

                    Функції зберігаються в силці і в самих параметрах силки: <br/>
                    <ul>
                        <li>https://developer.mozilla.org/ru/docs/Web/API/URLSearchParams</li>
                        <li>https://developer.mozilla.org/en-US/docs/Web/API/URL</li>
                        <li>URLSearchParams.append() - add a key & value in the end of url (like parameter)</li>
                        <li>URLSearchParams.delete() - deletes key & value from url</li>
                        <li>URLSearchParams.entries() - returns "iterator" for go throw all pairs</li>
                        <li>URLSearchParams.get() - returns value of chosen key in url</li>
                        <li>URLSearchParams.set() - sets value of key</li>
                        <li>URLSearchParams.getAll() - returns all keys & values</li>
                        <li>URLSearchParams.has() - returns true - if key & value (parameter) exists and false - if
                            parameter not exists
                        </li>
                        <li>URLSearchParams.toString() - parses url to string-value</li>
                        <li>URLSearchParams.keys() - returns all keys of query-url</li>
                        <li>URLSearchParams.values() - returns all values of query-url</li>
                    </ul>


                    <b>Синтаксиз: </b><br/>
                    <div style={{background: "Silver", fontFamily: "Consolas"}}><b>
                        const urla = new URL('https://developer.mozilla.org/en-US/docs/Web/API/URL?q=123');<br/>
                        urla.searchParams.append('myKey', 'myValue');
                    </b></div>


                    <div className={styles.title} style={{marginTop: 75}}><b>URL:</b></div>
                    <div className={styles.paragraph}>
                        Розділить на загальну (базову) силку і на ендпоінти, і складе в одну урлу<br/>
                        <div style={{background: "Silver", fontFamily: "Consolas"}}>
                            const baseURL = new URL('https://developer.mozilla.org/')<br/>
                            {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
                            const postUrl = new URL('posts', baseURL) <br/>
                            //Result: https://developer.mozilla.org/posts
                        </div>
                    </div>


                    <div>
                        <div className={styles.title} style={{marginTop: 75}}>
                            <b>Як опрацьовувати:</b>
                            {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
                        </div>
                        {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
                        <div style={{marginTop: 17}}>
                            <b>Варіант-1:</b>
                            <p>const query = 'ipsum';</p>
                            <p>const softField = 'title';</p>
                            <p>const sortOrder = 'desc';</p>
                            <p>const pageNumber = '1';</p>
                            <p>const itemPerPage = '10';</p>
                            <p>const templateUrl = https://jsonplaceholder.typicode.com/posts ?q= query &_sort=
                                softField &_order= sortOrder &_limit= itemPerPage &_page= pageNumber ;</p>
                            <p>Усі змінні потрібно внести в <b>$ + фігурні дужки</b></p>
                            <img src={screen1} height={40}/><br/><br/>
                            <img src={screen3}/>

                        </div>

                        <div style={{marginTop: 17}}>
                            <b>Варіант2:</b><br/>

                            <img src={screen2} height={300}/>
                        </div>

                        <div style={{marginTop: 17}}>
                            <b>Варіант3:</b><br/>

                            <img src={screen5} height={300}/>
                        </div>

                        <div style={{marginTop: 17}}>
                            <b>Варіант4:</b><br/>

                            <img src={screen6}/>
                        </div>

                        <br/><br/><br/><br/>
                        <div style={{marginTop: 17}}>
                            <b>Дивитись більше:</b><br/>
                            <b>https://github.com/YuraSab/url-search-params_url.git</b><br/>
                            <b>https://github.com/YuraSab/url-params_shop.git</b><br/>
                            <b>https://developer.mozilla.org/ru/docs/Web/API/URLSearchParams</b><br/>
                            <b>https://developer.mozilla.org/en-US/docs/Web/API/URL</b><br/>
                            <b>https://www.youtube.com/watch?v=ouuABmyc4PU&feature=youtu.be</b><br/>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}

export {About}