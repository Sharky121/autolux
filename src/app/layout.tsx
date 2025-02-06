import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

import "@/styles/global.scss";
import styles from "./page.module.css";

const montserrat = Montserrat({ 
  subsets: ["latin"],
  style: ['normal', 'italic'],
  weight: ['400', '700', '900'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Транспортная компания автолюкс",
  description: "Транспортная компания автолюкс",
  icons: {
    icon: '/favicon.ico'
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="ru" className={montserrat.className}>
      <body>
        <Header />

        <main className={styles.main}>
          {children}
        </main>

        <Footer />

        {/* SVG-ICONS */}
        <div style={{ display: "none" }}>
          <svg preserveAspectRatio="xMinYMid">
            <symbol id="ico-cross" viewBox="0 0 24 24">
              <path fill="currentColor" d="m12 13.05-5.075 5.075q-.2.2-.512.212-.313.013-.538-.212-.225-.225-.225-.525 0-.3.225-.525L10.95 12 5.875 6.925q-.2-.2-.212-.513-.013-.312.212-.537.225-.225.525-.225.3 0 .525.225L12 10.95l5.075-5.075q.2-.2.513-.213.312-.012.537.213.225.225.225.525 0 .3-.225.525L13.05 12l5.075 5.075q.2.2.212.512.013.313-.212.538-.225.225-.525.225-.3 0-.525-.225Z"></path>
            </symbol>
            <symbol id="ico-container-storage" viewBox="0 0 24 24">
              <path fill="currentColor" d="m24,5v-2H0v2h1v14H0v2h24v-2h-1V5h1Zm-16,12h-2V7h2v10Zm5,0h-2V7h2v10Zm5,0h-2V7h2v10Z"/>
            </symbol>
            <symbol id="ico-fish" viewBox="0 0 24 24">
              <path fill="currentColor" d="M18.491,12.443c.019,2.638-.439,5.81-2.257,8.313,.526-.179,1.001-.426,1.417-.74,2.711-2.047,2.501-5.989,1.822-6.893-.187-.25-.538-.484-.983-.679Z"/>
              <path fill="currentColor" d="M11.43,5.485c-.137-.466-.322-.844-.543-1.059-.535-.521-1.921-.743-2.896-.727-1.173,.018-2.846,.324-4.157,1.68-.855,.883-1.283,2.006-1.473,3.116,2.098-1.971,5.201-3.011,8.996-3.011,.024,0,.049,0,.073,0Z"/>
              <path fill="currentColor" d="M22.744,6.904c-.985-1.339-2.127-2.003-3.607-2.068-.064-1.484-.727-2.629-2.061-3.618-.195-.146-.615-.351-1.216-.098-.87,.368-2.565,2.06-2.846,4.125-.121,.899,.003,1.684,.219,2.328-2.835-.257-7.046-.091-9.671,2.544-.195,.195-.376,.398-.544,.605,5.509,1.317,8.85,4.714,10.174,10.343,.233-.186,.46-.389,.681-.611,2.627-2.635,2.792-6.859,2.535-9.702,.469,.159,1.01,.267,1.616,.267,.225,0,.459-.015,.701-.048,2.054-.279,3.744-1.977,4.112-2.849,.255-.602,.05-1.021-.095-1.217Z"/>
              <path fill="currentColor" d="M1.909,12.524c-1.724,3.812-.491,8.391,.351,9.236,.681,.684,2.89,1.24,4.924,1.24h0c1.197,0,2.715-.177,4.2-.839-1.102-5.564-4.043-8.554-9.476-9.638Zm3.662,7.441c-.841,0-1.523-.682-1.523-1.523s.682-1.523,1.523-1.523,1.523,.682,1.523,1.523-.682,1.523-1.523,1.523Z"/>
            </symbol>
            <symbol id="ico-snowflake" viewBox="0 0 24 24">
              <path fill="currentColor" d="m 22.094829,13.460687 -2.415036,0.575131 c -0.303798,0.07729 -0.594419,0.199364 -0.862294,0.362182 l -1.964216,-1.205244 c 0.212118,-0.778839 0.212118,-1.600231 0,-2.37907 l 1.964216,-1.2052433 c 0.267875,0.1628181 0.558496,0.2848858 0.862294,0.3621827 0,0 2.643843,0.6153736 2.757761,0.6153736 0.813565,-0.0077 1.466793,-0.6731728 1.459027,-1.4862481 C 23.890181,8.4281941 23.429764,7.846086 22.777369,7.684746 L 20.358404,7.1066576 c -0.05492,-0.013352 -0.101899,-0.048929 -0.129638,-0.098135 -0.02972,-0.047357 -0.03893,-0.1047415 -0.02552,-0.1589835 l 0.575508,-2.4144144 c 0.23542,-0.7782849 -0.205042,-1.5999539 -0.98384,-1.8352182 -0.778798,-0.2352642 -1.601008,0.2049091 -1.836426,0.9831939 -0.01748,0.057708 -0.03135,0.1163845 -0.04161,0.1758013 l -0.575511,2.4144151 c -0.0675,0.3025815 -0.0897,0.6134795 -0.06579,0.9225759 L 15.311361,8.3060338 C 14.806449,7.8714975 14.217855,7.5447982 13.581872,7.3461728 V 5.0347896 c 0.27874,-0.1411494 0.534362,-0.3238351 0.758177,-0.5417731 L 16.097047,2.738145 C 16.672281,2.1630137 16.67205,1.2307815 16.09655,0.65597361 15.52104,0.08111941 14.588194,0.08135043 14.013007,0.65648022 v 0 L 12.25698,2.4122758 c -0.08128,0.081317 -0.21309,0.081409 -0.294459,1.848e-4 -4.7e-5,-4.62e-5 -1.4e-4,-1.387e-4 -1.86e-4,-1.848e-4 L 10.204356,0.65643558 c -0.5755116,-0.57513135 -1.5085423,-0.57513135 -2.0840527,0 -0.5755104,0.57513142 -0.5755104,1.50754832 0,2.08267972 l 1.7569983,1.7548712 c 0.2238604,0.217569 0.4795304,0.3999308 0.7581774,0.5408031 V 7.3461728 C 10.000883,7.5466001 9.4139996,7.8745931 8.9108906,8.3099613 L 6.9417279,7.0958927 c 0.024595,-0.3113602 0.0024,-0.6246607 -0.06579,-0.9294599 L 6.3004279,3.7589017 C 6.1244644,2.9650928 5.3378536,2.4641168 4.5435218,2.6399642 3.7491901,2.8158119 3.247884,3.6019048 3.4238474,4.3957138 c 0.00337,0.015154 0.00698,0.030263 0.010818,0.045279 l 0.57551,2.4144149 c 0.01341,0.054289 0.00421,0.111672 -0.025522,0.1589836 -0.027739,0.049252 -0.074712,0.084782 -0.1296378,0.098135 L 1.4399814,7.6846999 C 0.64856239,7.8735304 0.16015541,8.6677088 0.3491103,9.4585604 0.50722767,10.120506 1.0987808,10.587894 1.7797489,10.58891 c 0.1139185,0 2.7577613,-0.615374 2.7577613,-0.615374 C 4.841308,9.8962349 5.1319299,9.7741714 5.3998046,9.6113533 l 1.9642155,1.2052427 c -0.2121177,0.77884 -0.2121177,1.600232 0,2.379071 L 5.3998046,14.400911 C 5.1319311,14.238092 4.8413093,14.116025 4.5375115,14.038728 L 2.1224766,13.463597 c -0.7775954,-0.239238 -1.60202488,0.196823 -1.84142013,0.973906 -0.23939525,0.777084 0.19695322,1.60097 0.97454853,1.840207 0.060427,0.01858 0.1220094,0.03326 0.1842854,0.04394 l 2.4150347,0.575132 c 0.054924,0.01335 0.1018979,0.04893 0.129638,0.09813 0.029729,0.04736 0.038928,0.104742 0.025522,0.158984 l -0.575464,2.414462 c -0.1898333,0.790851 0.2977875,1.585769 1.0891607,1.775477 0.7913728,0.189709 1.5868141,-0.297592 1.7766475,-1.088443 l 0.5755099,-2.414415 c 0.068287,-0.305123 0.090478,-0.618747 0.06579,-0.93043 l 1.9691623,-1.210142 c 0.5031091,0.435369 1.0899925,0.763361 1.7245885,0.963789 v 2.307456 c -0.278554,0.141889 -0.534131,0.324851 -0.7581765,0.542743 l -1.7569989,1.752885 c -0.5755104,0.575132 -0.5755104,1.507548 0,2.08268 0.5755104,0.575131 1.5085417,0.575131 2.0840524,0 l 1.756027,-1.755842 c 0.08128,-0.08132 0.213089,-0.08141 0.294459,-1.85e-4 4.7e-5,4.7e-5 1.38e-4,1.38e-4 1.85e-4,1.85e-4 l 1.756027,1.755842 c 0.575511,0.575131 1.508542,0.575131 2.084052,0 0.57551,-0.575132 0.57551,-1.507548 0,-2.08268 L 14.338109,19.51241 c -0.223583,-0.21706 -0.478513,-0.399331 -0.756236,-0.540803 v -2.311383 c 0.634596,-0.200428 1.22148,-0.528421 1.72459,-0.963789 l 1.964215,1.210142 c -0.02459,0.31136 -0.0025,0.62466 0.0658,0.92946 l 0.57551,2.414415 c 0.189833,0.790851 0.985275,1.278152 1.776648,1.088443 0.791373,-0.189708 1.278994,-0.984626 1.089161,-1.775477 l -0.575515,-2.414416 c -0.01341,-0.05429 -0.0041,-0.111672 0.02552,-0.158984 0.02774,-0.04925 0.07471,-0.08478 0.129639,-0.09813 l 2.415035,-0.575132 c 0.791373,-0.189707 1.278994,-0.984625 1.08916,-1.775477 -0.189834,-0.790852 -0.985275,-1.278153 -1.776647,-1.088444 v 0 z m -9.986177,0.505456 c -1.084814,0 -1.964215,-0.878821 -1.964215,-1.962922 0,-1.0841 0.879401,-1.962922 1.964215,-1.962922 1.084815,0 1.964216,0.878822 1.964216,1.962922 0,1.084101 -0.879401,1.962922 -1.964216,1.962922 z"/>
            </symbol>
            <symbol id="ico-sushi" viewBox="0 0 24 24">
              <path fill="currentColor" d="M4.5,11c.067,1.293,7.938,1.291,8,0C12.433,9.707,4.562,9.709,4.5,11Zm7-6c.067,1.293,7.938,1.291,8,0C19.433,3.707,11.562,3.709,11.5,5Zm-3,1C3.733,6,0,8.2,0,11v8c.162,6.6,16.839,6.6,17,0V11C17,8.2,13.267,6,8.5,6Zm0,2c8.572.227,8.572,5.774,0,6C-.072,13.773-.072,8.226,8.5,8ZM24,5v8c0,2.059-2.015,3.8-5,4.569V11a5.351,5.351,0,0,0-1.112-3.224C24.743,6.326,22.182,2.023,15.5,2c-2.96,0-5.22.945-6.1,2.028a15.806,15.806,0,0,0-2.252.03C8.812-1.6,23.83-1.262,24,5Z"/>
            </symbol>  
            <symbol id="ico-lipstick" viewBox="0 0 24 24">
              <path fill="currentColor" d="m14 24h-4a5.006 5.006 0 0 1 -5-5v-2a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v2a5.006 5.006 0 0 1 -5 5zm3-12v-2a1 1 0 0 0 -1-1h-8a1 1 0 0 0 -1 1v2zm-2-5v-5.586a1.412 1.412 0 0 0 -2.044-1.263l-2.622 1.311a2.412 2.412 0 0 0 -1.334 2.158v3.38z"/>
            </symbol>
            <symbol id="ico-pills" viewBox="0 0 24 24">
              <path fill="currentColor" d="m12.258,21.328c-.787-1.075-1.258-2.396-1.258-3.828,0-3.584,2.916-6.5,6.5-6.5,1.432,0,2.752.471,3.828,1.258l-9.069,9.07Zm1.414,1.414c1.075.787,2.396,1.258,3.827,1.258,3.584,0,6.5-2.916,6.5-6.5,0-1.432-.471-2.752-1.258-3.828l-9.069,9.069Zm-1.673-11.742v-5c0-3.308-2.692-6-6-6S0,2.692,0,6v5h12Zm-3,6.5c0-1.655.48-3.194,1.298-4.5H0v5c0,3.308,2.692,6,6,6,1.719,0,3.268-.731,4.363-1.894-.859-1.328-1.363-2.907-1.363-4.606Z"/>
            </symbol>
            <symbol id="ico-rose" viewBox="0 0 24 24">
              <path fill="currentColor" d="M23.996,13.957l-.127,1.124c-.794,7.021-7.366,8.876-10.731,8.876h-2.28C7.494,23.957,.921,22.102,.127,15.081l-.127-1.124H1.025c6.004,0,8.8,4.077,9.973,6.672v-5.72c-2.832-.479-4.998-2.943-4.998-5.909,0-2.18-.468-4.099-.743-5.039,.228,.006,1.839,.134,3.864,.964,2.135,.875,4.678,4.002,5.19,8.103,.002,.013,.092,.596,.197,1.415-.473,.219-.982,.372-1.511,.463v5.723c1.172-2.596,3.969-6.672,9.973-6.672h1.025ZM9.879,3.075c.697,.286,1.417,.742,2.113,1.34,.687-.587,1.41-1.045,2.128-1.34,1.002-.41,1.814-.661,2.434-.818,.124-1.579,.446-2.257,.446-2.257,0,0-2.5,0-5,1.5C9.5,0,7,0,7,0c0,0,.322,.678,.446,2.257,.619,.157,1.427,.405,2.433,.817Zm3.509,2.784c1.419,1.747,2.559,4.127,2.904,6.892,.003,.019,.024,.155,.055,.372,1.021-1.076,1.653-2.526,1.653-4.124,0-2.234,.491-4.194,.763-5.107-.202,.028-1.859,.202-3.884,1.032-.493,.202-.998,.524-1.491,.934Z"/>
            </symbol>
            <symbol id="ico-docs" viewBox="0 0 24 24">
              <path fill="currentColor" d="m19,17.5c0,.827-.673,1.5-1.5,1.5s-1.5-.673-1.5-1.5.673-1.5,1.5-1.5,1.5.673,1.5,1.5Zm-9,4.5c0-1.654-1.346-3-3-3h-.443c.682-1.687,1.443-3.738,1.443-4.5,0-1.381-1.119-2.45-2.5-2.45s-2.5,1.069-2.5,2.45c0,.762.761,2.813,1.443,4.5h-.443c-1.654,0-3,1.346-3,3-.553,0-1,.447-1,1s.447,1,1,1h9c.553,0,1-.447,1-1s-.447-1-1-1ZM24,5v14c0,2.757-2.243,5-5,5h-6.184c.112-.314.184-.648.184-1,0-.979-.472-1.85-1.199-2.397-.389-1.336-1.322-2.443-2.543-3.063.637-1.793.742-2.551.742-3.039,0-2.284-1.756-4.15-4-4.399v-5.101c0-2.757,2.243-5,5-5h8c2.757,0,5,2.243,5,5Zm-14,1c0,.553.447,1,1,1h8c.553,0,1-.447,1-1s-.447-1-1-1h-8c-.553,0-1,.447-1,1Zm7,5c.553,0,1-.447,1-1s-.447-1-1-1h-6c-.553,0-1,.447-1,1s.447,1,1,1h6Zm4,6.5c0-1.93-1.57-3.5-3.5-3.5s-3.5,1.57-3.5,3.5,1.57,3.5,3.5,3.5,3.5-1.57,3.5-3.5Z"/>
            </symbol>
            <symbol id="ico-payroll" viewBox="0 0 24 24">
              <path fill="currentColor" d="M14,12c0,1.103-.897,2-2,2s-2-.897-2-2,.897-2,2-2,2,.897,2,2Zm10.001,3.548c0,2.063-1.3,3.944-3.234,4.681-1.341,.512-2.608,.771-3.768,.771-1.634,0-3.098-.399-4.513-.785-1.348-.368-2.62-.715-3.986-.715-1.571,0-2.562,.101-3.419,.349-1.206,.347-2.474,.113-3.48-.644-1.017-.765-1.6-1.933-1.6-3.205v-7.548c0-2.063,1.299-3.944,3.233-4.681,1.341-.512,2.609-.771,3.768-.771,1.634,0,3.097,.399,4.513,.785,1.348,.368,2.62,.715,3.986,.715,1.57,0,2.562-.101,3.419-.349,1.208-.347,2.476-.113,3.481,.644,1.017,.765,1.6,1.933,1.6,3.205v7.548Zm-18-1.548c0-.552-.448-1-1-1s-1,.448-1,1,.448,1,1,1,1-.448,1-1Zm0-6c0-.552-.448-1-1-1s-1,.448-1,1,.448,1,1,1,1-.448,1-1Zm10,4c0-2.206-1.794-4-4-4s-4,1.794-4,4,1.794,4,4,4,4-1.794,4-4Zm4,4c0-.552-.448-1-1-1s-1,.448-1,1,.448,1,1,1,1-.448,1-1Zm0-6c0-.552-.448-1-1-1s-1,.448-1,1,.448,1,1,1,1-.448,1-1Z"/>
            </symbol>
            <symbol id="ico-truck-front" viewBox="0 0 24 24">
              <path fill="currentColor" d="m21.076,14H2.95c.107-.258.205-.52.33-.77l2.286-4.572c.512-1.022,1.54-1.658,2.684-1.658h7.527c1.144,0,2.172.636,2.684,1.658l2.286,4.572c.125.25.223.512.33.77Zm.642,2H2.307c-.189.853-.295,1.724-.295,2.597v3.403h2v2h5v-2h6v2h5v-2h2v-3.403c0-.873-.105-1.744-.295-2.597Zm-14.705,4c-.552,0-1-.448-1-1s.448-1,1-1,1,.448,1,1-.448,1-1,1Zm10,0c-.552,0-1-.448-1-1s.448-1,1-1,1,.448,1,1-.448,1-1,1ZM.013,18.597c0-.988.115-2.008.343-3.03l.002-.007c.23-1.036.583-2.041,1.052-2.992l2.367-4.803c.854-1.705,2.567-2.764,4.473-2.764h7.527c1.905,0,3.619,1.059,4.472,2.763l2.367,4.797c.472.957.827,1.967,1.057,3.009.182.828.293,1.653.328,2.46V3c0-1.654-1.346-3-3-3H3C1.346,0,0,1.346,0,3v16h.013v-.403Z"/>
            </symbol>
            <symbol id="ico-wrench-alt" viewBox="0 0 24 24">
              <path fill="currentColor" d="m23.013,3.776l-4.598,4.598c-.781.781-2.047.781-2.828,0-.781-.781-.781-2.047,0-2.828L20.172.959l-.292-.148c-1.062-.539-2.2-.812-3.381-.812-4.136,0-7.5,3.364-7.5,7.5,0,.959.178,1.886.531,2.767L.918,18.879c-1.168,1.17-1.168,3.072,0,4.242.585.585,1.353.877,2.121.877s1.537-.292,2.122-.877l8.631-8.631c.865.339,1.773.51,2.708.51,4.136,0,7.5-3.364,7.5-7.5,0-1.208-.283-2.366-.841-3.442l-.146-.282Z"/>
            </symbol>
            <symbol id="ico-house-building" viewBox="0 0 24 24">
              <path fill="currentColor" d="M21,0H13c-1.654,0-3,1.346-3,3v3.499c.219,.117,.431,.251,.633,.409l3.367,2.636v-.543h2v2.108l.081,.063c1.22,.954,1.919,2.39,1.919,3.938v1.891h2v2h-2v5h6V3c0-1.654-1.346-3-3-3Zm-5,7h-2v-2h2v2Zm4,8h-2v-2h2v2Zm0-4h-2v-2h2v2Zm0-4h-2v-2h2v2Zm-5.151,5.747l-5.448-4.265c-.824-.645-1.977-.646-2.801,0L1.151,12.746c-.731,.573-1.151,1.435-1.151,2.363v8.891H16V15.109c0-.929-.42-1.79-1.151-2.362Zm-4.849,6.253H6v-4h4v4Z"/>
            </symbol>
            <symbol id="ico-people-partners" viewBox="0 0 24 24">
              <path fill="currentColor" d="m6,0C2.691,0,0,2.691,0,6s2.691,6,6,6,6-2.691,6-6S9.309,0,6,0Zm0,2c1.105,0,2,.895,2,2s-.895,2-2,2-2-.895-2-2,.895-2,2-2Zm0,8c-1.181,0-2.233-.524-2.966-1.34.618-.993,1.71-1.66,2.966-1.66s2.348.667,2.966,1.66c-.733.816-1.784,1.34-2.966,1.34Zm12,2c-3.309,0-6,2.691-6,6s2.691,6,6,6,6-2.691,6-6-2.691-6-6-6Zm0,2c1.105,0,2,.895,2,2s-.895,2-2,2-2-.895-2-2,.895-2,2-2Zm0,8c-1.181,0-2.233-.524-2.966-1.34.618-.993,1.71-1.66,2.966-1.66s2.348.667,2.966,1.66c-.733.816-1.784,1.34-2.966,1.34ZM14,4.5c0-.829.672-1.5,1.5-1.5h.5c2.757,0,5,2.243,5,5v.5c0,.829-.672,1.5-1.5,1.5s-1.5-.671-1.5-1.5v-.5c0-1.103-.897-2-2-2h-.5c-.828,0-1.5-.671-1.5-1.5Zm-4,15c0,.829-.672,1.5-1.5,1.5h-.5c-2.757,0-5-2.243-5-5v-.5c0-.829.672-1.5,1.5-1.5s1.5.671,1.5,1.5v.5c0,1.103.897,2,2,2h.5c.828,0,1.5.671,1.5,1.5Z"/>
            </symbol>
            <symbol id="ico-briefcase" viewBox="0 0 24 24">
              <path fill="currentColor" d="M19,4H17.9A5.009,5.009,0,0,0,13,0H11A5.009,5.009,0,0,0,6.1,4H5A5.006,5.006,0,0,0,0,9v3H24V9A5.006,5.006,0,0,0,19,4ZM8.184,4A3,3,0,0,1,11,2h2a3,3,0,0,1,2.816,2Z"/>
              <path fill="currentColor" d="M13,15a1,1,0,0,1-2,0V14H0v5a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V14H13Z"/>
            </symbol>
            <symbol id="ico-forklift" viewBox="0 0 24 24">
              <path fill="currentColor" d="m11,21h6c0,1.657-1.343,3-3,3s-3-1.343-3-3Zm-8,3c1.657,0,3-1.343,3-3H0c0,1.657,1.343,3,3,3Zm18-7V3h-2v11h-10.758l-.638-2.271c-.121-.43-.517-.729-.963-.729H0v8h17v-.5l-.497-2.5h2.497v3h5v-2h-3Zm-11.47-5.812l.228.812h5.95l-1.906-9.589c-.279-1.397-1.517-2.411-2.942-2.411H3C1.346,0,0,1.346,0,3v6h6.642c1.339,0,2.526.9,2.889,2.188Z"/>
            </symbol>
            <symbol id="ico-risk" viewBox="0 0 24 24">
              <path fill="currentColor" d="m13,9v2c0,.552-.448,1-1,1s-1-.448-1-1v-2c0-.552.448-1,1-1s1,.448,1,1Zm-1,4c-.552,0-1,.448-1,1s.448,1,1,1,1-.448,1-1-.448-1-1-1Zm10.46,4.882c-.811,1.44-2.645,1.954-4.085,1.145l-.574-.323c-.823.73-1.773,1.303-2.801,1.688v.608c0,1.654-1.346,3-3,3s-3-1.346-3-3v-.5c-1.094-.364-2.107-.938-2.988-1.691l-.387.218c-1.443.808-3.275.295-4.085-1.145-.811-1.442-.297-3.275,1.145-4.086l.329-.185c-.099-.536-.148-1.082-.148-1.631,0-.536.048-1.07.142-1.596l-.323-.181c-1.441-.811-1.955-2.644-1.145-4.086.393-.698,1.034-1.202,1.806-1.418.771-.217,1.582-.12,2.28.274l.359.202c.886-.765,1.909-1.347,3.015-1.716v-.461c0-1.654,1.346-3,3-3s3,1.346,3,3v.57c1.039.39,1.997.97,2.827,1.711l.548-.308c.697-.394,1.507-.493,2.279-.273.771.216,1.413.72,1.806,1.418.811,1.442.297,3.275-1.145,4.086l-.603.339c.077.475.115.955.115,1.438,0,.495-.041.988-.121,1.474l.608.342c1.442.811,1.956,2.644,1.145,4.086Zm-5.056-4.012l-4.181-7.167c-.547-.937-1.9-.937-2.447,0l-4.181,7.167c-.551.944.13,2.13,1.224,2.13h8.361c1.093,0,1.774-1.186,1.224-2.13Z"/>
            </symbol>
            <symbol id="ico-speedometer-kpi" viewBox="0 0 24 24">
              <path fill="currentColor" d="m24,12C24,4.93,17.856-.73,10.627.077,6.273.563,2.455,3.475.852,7.551c-1.738,4.42-.716,9.115,2.148,12.37v-2.921c0-1.657,1.343-3,3-3h6c-1.105,0-2-.895-2-2s.895-2,2-2c.167,0,.328.027.483.065l3.814-3.776c.392-.39,1.024-.385,1.414.007.389.393.385,1.026-.008,1.414l-3.786,3.749c.049.173.083.352.083.541,0,1.105-.895,2-2,2h6c1.657,0,3,1.343,3,3v2.921c1.909-2.17,3-4.979,3-7.921Zm-9.195-7.047l-.045.045c-.255.255-.627.334-.976.24-.57-.153-1.167-.238-1.785-.238-3.263,0-6.005,2.247-6.776,5.273-.11.433-.512.727-.959.727-.648,0-1.141-.61-.98-1.238.997-3.883,4.524-6.762,8.715-6.762.824,0,1.62.114,2.377.325.718.2.955,1.101.428,1.628Zm4.926,6.047h0c-.464,0-.859-.322-.971-.772-.005-.019-.01-.038-.015-.057-.087-.336.019-.692.264-.937.551-.551,1.484-.287,1.686.467.005.019.01.038.015.057.164.629-.329,1.243-.979,1.243Zm-1.931,13h0c-.442,0-.8-.358-.8-.8v-6.4c0-.442.358-.8.8-.8h0c.442,0,.8.358.8.8v6.4c0,.442-.358.8-.8.8Zm-9.21-.476l-1.378-3.057h-.612v2.733c0,.442-.358.8-.8.8h0c-.442,0-.8-.358-.8-.8v-6.4c0-.442.358-.8.8-.8h0c.442,0,.8.358.8.8v2.067h.354l1.449-2.465c.146-.249.414-.402.703-.402h0c.624,0,1.016.672.71,1.215l-1.25,2.22,1.502,3.433c.234.534-.158,1.132-.741,1.132h0c-.318,0-.606-.186-.737-.476Zm4.987-6.024c.551,0,1,.449,1,1s-.449,1-1,1h-.555v-2h.555m.022-1.5h-1.3c-.442,0-.8.358-.8.8v6.4c0,.442.358.8.8.8s.8-.358.8-.8v-2.2h.5c1.381,0,2.5-1.119,2.5-2.5s-1.119-2.5-2.5-2.5h0Z"/>
            </symbol>
            <symbol id="ico-bullseye-arrow" viewBox="0 0 24 24">
              <path fill="currentColor" d="M23.17,7.66c.53,1.35,.83,2.81,.83,4.34,0,6.62-5.38,12-12,12S0,18.62,0,12,5.38,0,12,0c1.53,0,3,.3,4.34,.83l-1.34,1.34v1.35c-.94-.33-1.95-.53-3-.53C7.04,3,3,7.04,3,12s4.04,9,9,9,9-4.04,9-9c0-1.05-.19-2.06-.53-3h1.35l1.34-1.34Zm-12.31,.53l2.94-2.94c-.58-.15-1.18-.24-1.81-.24-3.86,0-7,3.14-7,7s3.14,7,7,7,7-3.14,7-7c0-.63-.09-1.23-.24-1.81l-2.94,2.94c-.49,1.65-2.01,2.87-3.82,2.87-2.21,0-4-1.79-4-4,0-1.81,1.22-3.32,2.87-3.82Zm1.01,1.82c-1.05,.06-1.87,.93-1.87,2s.9,2,2,2,1.93-.83,2-1.87l5.13-5.13h1.88l3-3h-4V0l-3,3v1.88l-5.13,5.13Z"/>
            </symbol>
          </svg>
        </div>
      </body>
    </html>
  );
}
