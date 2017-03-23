import * as React from 'react'
import { IUnitType } from '../../engine/unit'

const unitGlyphs = {
  /* tslint:disable:max-line-length */
  archer: <g style={{ transform: 'translate(-77.4925px,-156.926875px)' }}><path d="M25.391,39.735l3.136-1.734l-1.048-1.896l-3.137,1.733l-1.553-2.808l3.137-1.734l-1.047-1.895l-3.137,1.734l-1.553-2.809   l3.137-1.734l-1.048-1.897l-10.211,5.644l1.048,1.897l3.136-1.734l1.552,2.809l-3.135,1.734l1.047,1.896l3.137-1.733l1.552,2.809   l-3.136,1.732l1.048,1.896l3.136-1.733l9.34,16.896c0.18-2.596,0.458-5.206,0.824-7.811L25.391,39.735z"/><path d="M4.068,42.036l2.26,2.277l-2.543,2.523l1.524,1.539l2.544-2.524l2.26,2.278l-2.545,2.522l1.525,1.539l2.545-2.523   l18.95,19.112c-0.068-2.097-0.059-4.228,0.016-6.375L14.834,46.5l2.544-2.523l-1.525-1.538l-2.545,2.522l-2.26-2.277l2.545-2.524   l-1.525-1.538l-2.545,2.523l-2.259-2.277l2.545-2.524l-1.525-1.538L0,43.021l1.525,1.538L4.068,42.036z"/><path d="M96.479,76.15l-2.523-1.055c-0.148-0.062-1.437-0.614-3.119-1.711c-2.33-1.52-5.415-4.089-7.275-7.861   c-0.011-0.023-0.022-0.047-0.032-0.07c-0.14-0.007-0.277-0.021-0.419-0.021H44.473c-0.141,0-0.278,0.014-0.417,0.021   c-0.112,0.231-0.229,0.456-0.351,0.677c-0.605,1.107-1.313,2.104-2.069,2.995c-0.701,0.826-1.441,1.561-2.179,2.208   c-0.403,0.353-0.805,0.683-1.199,0.984c-0.524,0.402-1.034,0.757-1.512,1.069c-0.349,0.228-0.678,0.429-0.986,0.61   c-1.177,0.691-2.014,1.051-2.131,1.1l-2.523,1.055l-0.24-2.726c-0.084-0.954-0.146-1.92-0.196-2.891   c-2.24,1.196-4.589,2.688-6.959,4.592c-5.266,4.247-10.447,10.501-14.169,19.181c-3.734,8.681-6.04,19.709-6.038,33.638   c0,3.029,0.107,6.2,0.335,9.52c0.289,4.222,3.805,7.453,7.975,7.453c0.183,0,0.368-0.006,0.553-0.019   c4.409-0.303,7.737-4.122,7.434-8.529c-0.204-2.971-0.297-5.775-0.297-8.425c0-12.185,2.007-20.967,4.735-27.314   c3.571-8.204,8.271-12.557,12.508-15.154v54.204c-0.252,1.566-0.686,4.321-1.243,8.086l2.604-1.835l20.264-14.282l32.465-22.88   V83.81c1.221,0.97,2.518,2.406,3.837,4.658c1.731,3.006,3.41,7.648,4.29,14.573l14.375-10.131   c-0.313-1.272-0.646-2.511-1.017-3.682c-3.068-9.818-8.436-16.241-14.009-19.698c-0.441-0.277-0.88-0.53-1.317-0.771   c-0.051,1.575-0.142,3.132-0.276,4.666L96.479,76.15z"/><path d="M44.576,177.323c-5.231-0.289-9.289-1.234-12.62-2.946c-2.089,17.41-4.323,39.667-5.62,63.528   c-0.374,6.894,4.912,12.785,11.806,13.159c0.231,0.013,0.461,0.018,0.689,0.018c6.592,0.001,12.108-5.159,12.47-11.822   c1.271-23.463,3.495-45.469,5.559-62.569c-3.296,0.449-6.521,0.695-9.63,0.695C46.324,177.387,45.438,177.364,44.576,177.323z"/><path d="M76.17,239.259c0.361,6.662,5.877,11.824,12.471,11.824c0.228,0,0.458-0.006,0.688-0.019   c6.893-0.374,12.177-6.265,11.806-13.159c-1.582-29.077-4.555-55.774-6.96-74.216c-7.812,4.349-15.936,7.76-23.92,10.096   C72.414,191.26,74.826,214.441,76.17,239.259z"/><path d="M90.836,118.818l-12.69,8.943l-11.763,8.29l-4.611,3.25l-14.162,9.98l-13.683,9.644c-0.109,0.803-0.219,1.622-0.331,2.465   c1.255,0.428,2.431,0.968,3.521,1.651c1.152,0.759,3.928,1.684,8.077,1.875c0.688,0.034,1.392,0.053,2.118,0.053   c3.366,0,7.209-0.412,11.184-1.154c0.745-5.579,1.42-10.263,1.949-13.805c0.038-0.25,0.074-0.49,0.11-0.729h6.362   c0.467,3.098,1.056,7.147,1.716,11.994c8.07-2.535,16.17-6.256,23.714-10.903c-0.657-4.54-1.186-7.947-1.511-9.989V118.818z"/><path d="M59.635,133.207l-20.177,14.22l-4.354,3.069L16.325,163.73c-5.357,1.398-9.334,3.307-9.51,3.35   c-2.11,0.977-3.027,3.481-2.048,5.593c0.107,0.233,0.236,0.454,0.38,0.658c1.149,1.631,3.335,2.261,5.21,1.391l0.002-0.001   c0,0,0.189-0.088,0.623-0.273c1.517-0.651,5.625-2.276,9.957-3.144c4.356-0.944,8.764-0.77,10.603,0.545   c0.218,0.136,0.45,0.254,0.674,0.381c3.415,1.93,7.604,2.829,12.456,3.097c3.753,0.18,7.947-0.051,12.439-0.704   c4.078-0.593,8.41-1.554,12.892-2.876c7.579-2.236,15.584-5.545,23.566-10.023c-1.101-1.942-1.559-4.251-1.159-6.597   c0.024-0.14,0.038-0.28,0.068-0.421c0.096-0.448,0.193-0.915,0.289-1.393c0.065-0.318,0.129-0.641,0.194-0.97   c-0.102,0.062-0.203,0.124-0.305,0.186c-8.005,4.846-16.149,8.395-23.752,10.755c-2.893,0.898-5.71,1.633-8.407,2.194   c-0.77,0.161-1.53,0.306-2.28,0.44c-4.937,0.882-9.414,1.189-13.115,0.995c-4.263-0.196-7.476-1.144-9.05-2.178   c-0.882-0.553-1.795-0.98-2.723-1.324c-2.281-0.845-4.661-1.129-6.961-1.136c-0.231,0.002-0.461,0.008-0.692,0.016l8.62-6.075   l9.862-6.95l17.252-12.159l7.572-5.337l4.273-3.012l17.58-12.389l8.689-6.124l15.107-10.647l22.307-15.721   c-0.085,0.223-0.186,0.436-0.268,0.661c-1.076,3.049-1.714,6.432-0.938,9.944c0.445,1.832,0.256,5.177-0.992,9.256   c-2.427,8.209-8.768,19.14-18.455,29.569c-0.142,1.002-0.316,2.219-0.515,3.579c-0.429,2.933-0.977,6.547-1.578,10.22   c9.02-7.969,16.138-16.677,21.205-24.961c3.426-5.61,5.92-11.024,7.412-15.983c1.47-4.967,2.027-9.469,1.14-13.535   c-0.302-1.264-0.112-3.126,0.657-5.262c1.121-3.191,3.438-6.756,5.477-9.392c1.019-1.323,1.962-2.427,2.642-3.19   c0.339-0.381,0.613-0.676,0.797-0.871c0.18-0.195,0.254-0.269,0.254-0.269c1.631-1.659,1.606-4.325-0.05-5.954   c-1.658-1.631-4.323-1.607-5.954,0.051c-0.104,0.109-3.225,3.273-6.339,7.816l-27.611,19.46l-14.612,10.298l-8.375,5.903   L59.635,133.207z"/><path d="M113.598,139.063c0.168-1.165,0.325-2.31,0.47-3.438c0.144-1.11,0.276-2.203,0.398-3.278   c0.084-0.741,0.17-1.483,0.244-2.208c0.001-0.011,0.003-0.023,0.004-0.034h0.002c0,0,0-0.001,0-0.001   c0.601-5.895,0.88-11.246,0.88-16.12c-0.001-4.43-0.243-8.448-0.674-12.14l-15.338,10.81c0.005,0.442,0.015,0.875,0.015,1.33   c0,4.263-0.247,9.075-0.8,14.49h0.001c0,0,0,0.001,0,0.001c-0.001,0.005-0.001,0.01-0.002,0.015   c-0.597,5.827-1.556,12.357-2.944,19.638c-0.172,0.9-0.351,1.814-0.537,2.738c-0.188,0.94-0.388,1.9-0.59,2.865   c-0.098,0.467-0.189,0.922-0.291,1.395c-0.427,1.995-0.064,3.97,0.869,5.615c0.33,0.583,0.726,1.128,1.191,1.612   c1.067,1.11,2.466,1.925,4.085,2.272c0.564,0.121,1.129,0.18,1.684,0.18c3.692,0,7.012-2.569,7.818-6.324   c0.469-2.188,0.896-4.309,1.3-6.392c0.2-1.031,0.391-2.049,0.576-3.055C112.591,145.566,113.138,142.243,113.598,139.063z"/><path d="M58.691,59.643c8.469,1.971,16.93-1.127,22.214-7.312c-5.229-33.258-13.582-37.083-17.113-37.083   c-3.531,0-11.884,3.825-17.113,37.083C49.691,55.869,53.819,58.509,58.691,59.643z"/><path d="M32.621,69.551c0.019,0.45,0.042,0.9,0.068,1.348c0.046,0.788,0.1,1.572,0.168,2.352c0,0,0.571-0.241,1.442-0.727   c0.781-0.436,1.805-1.08,2.892-1.928c0.026-0.021,0.053-0.042,0.079-0.063c0.254-0.2,0.507-0.409,0.765-0.631   c0.875-0.757,1.755-1.639,2.553-2.669c0.149-0.193,0.286-0.403,0.429-0.605c0.132-0.188,0.27-0.366,0.396-0.562   c1.05-1.638,1.855-3.57,2.133-5.814c0.26-2.095,0.722-5.771,1.453-10.164c1.879-11.293,5.564-27.358,12.32-33.893   c1.905-1.843,4.049-2.944,6.472-2.944c2.423,0,4.567,1.101,6.472,2.944c6.759,6.538,10.445,22.617,12.323,33.911   c0.729,4.384,1.19,8.053,1.449,10.145c0.249,2.008,0.932,3.753,1.823,5.274c0.105,0.179,0.201,0.368,0.312,0.541   c1.222,1.904,2.772,3.398,4.221,4.528c2.3,1.796,4.334,2.656,4.334,2.656c0.159-1.805,0.253-3.636,0.295-5.481   C95.725,36.221,79.76,0,63.791,0C50.126,0,36.463,26.526,33.247,53.949c-0.318,2.715-0.535,5.439-0.639,8.147   c-0.029,0.758-0.048,1.515-0.059,2.27C32.524,66.107,32.547,67.837,32.621,69.551z"/></g>,
  mage: <g style={{ transform: 'translate(-108.428px,-189.553125px)' }}><path d="M40.714,89.922C48.15,66.543,55.31,43.629,53.832,34.137C52.86,27.896,70.91,26.648,66.93,19.425   c-4.652-8.44,8.624,0.525,6.854-8.309C72.8,6.216,66.032,1.555,57.435,0.121c-8.597-1.434-2.638,10.18-5.681,19.706   c-2.13,6.668-21.911,18.196-4.805,20.511c-1.098,13.297-9.777,27.32-11.828,40.312c-0.386,2.063-0.864,4.262-1.409,6.55   c-1.566,0.184-3.095,0.826-4.365,1.951c-3.309,2.926-3.618,7.983-0.691,11.292c0.375,0.424,0.754,0.825,1.131,1.239   c-3.49,11.789-7.645,23.992-10.434,32.718c-8.216,25.721-24.388,64.295-17.821,66.742c6.566,2.447,6.857-24.754,14.279-38.129   c8.031-15.281,12.168-31.43,17.005-47.757c0.773-2.61,1.588-5.284,2.426-7.994c1.042,0.99,2.086,1.955,3.135,2.873l3.444-19.003   C41.451,90.73,41.081,90.337,40.714,89.922z"/><path d="M214.848,100.442c2.928-3.311,2.618-8.365-0.69-11.291c-3.31-2.928-8.365-2.62-11.291,0.69   c-0.393,0.443-0.787,0.862-1.181,1.291l3.444,18.999C208.41,107.258,211.665,104.043,214.848,100.442z"/><path d="M125.739,48.86c-6.124-6.58-15.788-14.54-28.89-18.051c-23.709-6.355-24.75,3.25-25.75,6   c13.834-0.795,20.076,12.162,22.406,23.244c5.624-2.84,11.849-5.384,18.114-7.426C116.401,51.069,121.149,49.817,125.739,48.86z    M92.456,38.736l-1.396,1.627l-0.442-2.098l-1.979-0.826l1.86-1.068l0.174-2.138l1.591,1.438l2.086-0.496l-0.876,1.957l1.115,1.832   L92.456,38.736z M106.227,45.022l-0.216,2.751l-2.052-1.844l-2.683,0.645l1.12-2.523l-1.442-2.352l2.745,0.287l1.791-2.099   l0.576,2.698l2.55,1.055L106.227,45.022z"/><path d="M97.897,82.175c2.598-11.154,12.401-18.945,23.837-18.945c1.866,0,3.743,0.217,5.576,0.645   c6.555,1.526,11.881,5.569,15.197,10.868c12.433-6.81,19.838-14.458,18.067-19.891c-2.052-6.298-15.822-7.742-33.29-4.28   c-4.792,0.949-9.86,2.266-15.044,3.955c-6.737,2.195-12.949,4.784-18.349,7.549c-13.898,7.119-22.398,15.411-20.516,21.191   c1.668,5.119,11.078,7.026,23.918,5.706C97.18,86.741,97.366,84.459,97.897,82.175z"/><path d="M126.856,65.821c-12.1-2.816-24.193,4.708-27.012,16.808c-0.479,2.055-0.652,4.109-0.563,6.118   c0.03,0.665,0.088,1.325,0.176,1.979c0.217,1.611,0.607,3.181,1.156,4.687c0.224,0.144,0.473,0.283,0.722,0.428   c0.477,0.278,0.954,0.583,1.26,1.013c0.624,0.875,1.288,1.816,2.063,2.747c0.71,0.853,1.405,1.781,2.236,2.619   c0.604,0.608,0.898,1.626,1.399,2.402l-0.031,0.216c-0.04,0.265-0.074,0.538-0.108,0.81c-0.06,0.478-0.105,0.963-0.094,1.467   c0.009,0.339,0.036,0.659,0.072,0.968c0.08,0.704,0.214,1.335,0.346,1.877c0.459,1.901,1.51,2.866,3.122,2.866l0.133,0.004   c0.098,0.004,0.198,0.006,0.3,0.006c1.227,0,2.222-0.519,2.938-1.52c0.012-0.013,0.03-0.024,0.043-0.037   c0.09-0.093,0.197-0.178,0.312-0.271c0.386-0.317,0.901-0.753,1.308-1.373c0.034-0.052,0.071-0.095,0.103-0.149   c0.128-0.215,0.258-0.441,0.388-0.666c0.377,0.537,0.772,1.023,1.289,1.132c0.094,0.019,0.19,0.011,0.287,0.007   c1.037-0.039,2.226-1.296,3.303-1.296c1.177,0,2.381,1.001,3.482,0.771c0.555-0.116,1.162-0.147,1.761-0.199   c0.037,0.07,0.063,0.138,0.104,0.208c0.014,0.023,0.03,0.042,0.045,0.064c0.016,0.025,0.033,0.047,0.05,0.072   c0.561,0.831,1.399,1.186,2.028,1.41c0.056,0.02,0.113,0.041,0.165,0.059c0.035,0.013,0.071,0.025,0.107,0.035   c0.06,0.172,0.121,0.386,0.164,0.537c0.213,0.736,0.708,2.46,2.497,2.46c2.049,0,3.226-2.624,3.564-4.015   c0.039-0.164,0.093-0.342,0.147-0.531c0.186-0.625,0.409-1.401,0.451-2.271c0.002-0.045,0.01-0.088,0.011-0.134   c0.018-0.758-0.179-1.435-0.356-2.03c-0.012-0.041-0.021-0.077-0.033-0.117c-0.074-0.255-0.142-0.498-0.169-0.684   c-0.027-0.193-0.058-0.402-0.093-0.621c-0.009-0.056-0.021-0.117-0.031-0.173c0.099-0.04,0.195-0.081,0.293-0.122   c0.493-0.205,0.964-0.43,1.311-0.779c0.83-0.836,0.861-2.377,1.571-3.229c0.773-0.93,1.705-1.646,2.328-2.521   c0.744-1.044,1.181-2.279,1.698-3.127c0.573-0.936,0.68-1.922,0.887-2.603c0.047-0.156,0.101-0.295,0.166-0.414   c-0.035,0.007-0.072,0.011-0.105,0.02c0.637-4.701-0.245-9.316-2.304-13.304c-0.307-0.594-0.639-1.175-0.996-1.74   C137.698,70.877,132.837,67.215,126.856,65.821z M134.58,107.08c-0.015,0.608-0.18,1.204-0.339,1.742   c-0.081,0.275-0.16,0.54-0.217,0.773c-0.291,1.203-1.115,2.484-1.617,2.484c-0.428,0-0.515-1.032-0.864-1.875   c-0.077-0.188-0.164-0.369-0.275-0.524c-0.285-0.398-1.118-0.506-1.704-0.827c-0.012-0.006-0.022-0.012-0.033-0.018   c-0.056-0.031-0.103-0.07-0.152-0.106c-0.122-0.088-0.232-0.187-0.307-0.313c-0.367-0.619-0.525-1.414-0.926-2.086   c-0.385-0.646-0.777-1.293-1.195-1.918c-0.434-0.648-0.493-1.566-0.966-2.115c-0.528-0.615-1.391-0.811-1.972-1.2   c-0.669-0.448-1.266-1.454-2.01-1.454c-0.744,0-1.064,1.418-1.733,1.866c-0.581,0.39-1.312,0.524-1.84,1.139   c-0.474,0.55-1.587,0.687-2.021,1.334c-0.419,0.625,0.131,1.878-0.254,2.525c-0.149,0.251-0.291,0.498-0.435,0.746   c-0.055,0.095-0.111,0.192-0.166,0.286c-0.182,0.316-0.36,0.626-0.537,0.924c-0.128,0.216-0.298,0.4-0.478,0.572   c-0.418,0.399-0.907,0.715-1.176,1.09c-0.145,0.202-0.29,0.344-0.436,0.448c-0.468,0.336-0.93,0.251-1.329,0.251   c-0.501,0-0.887-0.133-1.177-1.334c-0.004-0.015-0.007-0.033-0.01-0.048c-0.164-0.681-0.331-1.477-0.354-2.378   c-0.001-0.038,0.003-0.079,0.003-0.118c-0.001-0.228,0.012-0.459,0.034-0.694c0.005-0.053,0.01-0.107,0.016-0.161   c0.052-0.477,0.131-0.966,0.2-1.471c0.109-0.793-0.52-1.834-0.266-2.638c0.244-0.772,0.904-1.506,1.305-2.237   c0.391-0.71,1.135-1.258,1.694-1.881c0.534-0.596,1.118-1.221,1.826-1.695c0.652-0.438,1.578-0.392,2.393-0.692   c0.727-0.269,1.396-0.868,2.264-1.005c0.763-0.119,1.597,0.396,2.476,0.396c0.879,0,1.596,0.247,2.358,0.366   c0.866,0.136,1.786-0.379,2.513-0.111c0.814,0.301,1.365,0.971,2.018,1.408c0.707,0.475,1.909,0.402,2.443,0.997   c0.56,0.624,0.473,1.757,0.862,2.468c0.401,0.73,1.09,1.349,1.335,2.121c0.248,0.786,0.392,1.624,0.5,2.401   c0.003,0.017,0.007,0.036,0.009,0.052c0.002,0.018,0.009,0.035,0.011,0.052c0.086,0.558,0.289,1.121,0.419,1.66   C134.536,106.557,134.587,106.825,134.58,107.08z"/><path d="M100.898,116.851c-37.076-5.4-57.047-25.711-57.047-25.711l-0.326,1.802l-3.387,18.689l-8.852,48.843   c0,0,40.063-1.334,50.063-2c10-0.666-8.667,108.667-32.333,136.167c0,0,18.771-2.624,39.19-4.537   c-0.045,0.683-0.02,1.352,0.044,2.011c0.568,5.923,5.344,10.735,11.473,11.142c6.813,0.453,12.704-4.702,13.157-11.516l0.093-1.399   l0.134-2.009c1.763-0.071,3.478-0.124,5.132-0.156l3.515-19.786l3.515,19.786c1.653,0.032,3.369,0.085,5.131,0.156l0.134,2.009   l0.093,1.399c0.453,6.813,6.345,11.969,13.157,11.516c6.129-0.407,10.904-5.219,11.473-11.142c0.063-0.659,0.089-1.329,0.044-2.011   c20.419,1.914,39.191,4.537,39.191,4.537c-23.666-27.5-42.333-136.833-32.333-136.167c10,0.666,50.063,2,50.063,2l-8.852-48.848   l-3.387-18.686l-0.326-1.8c0,0-19.773,20.121-56.508,25.637c0.182-0.608,0.367-1.234,0.517-1.879   c0.02-0.086,0.021-0.167,0.035-0.252c0.15-0.907,0.012-1.759-0.116-2.453c-0.061-0.334-0.152-0.843-0.117-1.006   c0.104-0.485,0.265-0.982,0.434-1.508c0.2-0.615,0.405-1.251,0.54-1.931c0.143-0.7,0.24-1.392,0.336-2.063   c0.071-0.501,0.14-0.991,0.229-1.466c0.061-0.328,0.29-0.749,0.534-1.193c0.342-0.625,0.729-1.334,0.876-2.182   c0.083-0.487,0.285-0.986,0.5-1.516c0.244-0.607,0.499-1.232,0.607-1.925c0.075-0.468,0.193-0.94,0.311-1.397   c0.327-1.297,0.667-2.639-0.088-3.871c-0.263-0.431-0.781-0.963-1.672-1.269c0.399,0.78-0.264,2.203-0.525,3.847   c-0.157,0.992-0.875,2.092-1.104,3.414c-0.185,1.073-1.174,2.104-1.406,3.353c-0.205,1.103-0.316,2.286-0.558,3.497   c-0.224,1.119-0.715,2.223-0.971,3.413c-0.242,1.132,0.476,2.507,0.205,3.685c-0.229,0.993-0.561,1.985-0.835,2.995   c-0.04,0.147-0.088,0.29-0.124,0.437c-0.125,0.506-0.439,0.966-0.773,1.422c-0.077,0.104-0.152,0.209-0.229,0.314   c-0.041,0.055-0.081,0.109-0.12,0.164c-0.3,0.414-0.572,0.835-0.695,1.296c-0.305,1.14-0.929,2.18-1.259,3.315   c-0.332,1.14,0.771,2.711,0.416,3.83c-0.363,1.138-2.222,1.758-2.61,2.859c-0.089,0.253-0.123,0.523-0.136,0.801   c-0.041,0.97,0.245,2.046-0.087,2.884c-0.446,1.126-1.381,2.01-1.856,3.057c-0.507,1.114-1.341,1.981-1.881,2.982   c-0.59,1.091-0.872,2.24-1.501,3.169c-0.708,1.044-1.891,1.461-2.65,2.259c-0.883,0.928-0.921,2.609-1.874,3.141   c-1.082,0.604-2.324,0.637-3.496,0.637c-1.17,0-1.893-0.961-2.974-1.564c-0.953-0.531-2.6-0.245-3.483-1.173   c-0.76-0.797-1.448-1.849-2.157-2.893c-0.63-0.929-1.093-2.064-1.683-3.155c-0.541-1.003-1.33-1.958-1.837-3.073   c-0.477-1.047-1.06-2.113-1.506-3.24c-0.417-1.054,0.571-2.652,0.242-3.782c-0.008-0.025-0.007-0.054-0.016-0.079   c-0.389-1.104-1.863-1.846-2.227-2.985c-0.356-1.121-1.102-2.144-1.434-3.284c-0.33-1.135-0.443-2.344-0.748-3.484   c-0.136-0.507-0.246-1.02-0.356-1.533c-0.01-0.048-0.022-0.096-0.033-0.144c-0.022-0.107-0.049-0.212-0.071-0.319   c-0.104-0.493-0.206-0.985-0.326-1.469c-0.026-0.105-0.068-0.207-0.101-0.311c-0.32-1.041-0.893-2.016-1.132-3.049   c-0.27-1.174,0.921-2.65,0.679-3.78c-0.255-1.19-2.137-2.011-2.36-3.13c-0.243-1.212,1.024-2.666,0.818-3.77   c-0.023-0.121-0.044-0.23-0.066-0.35c-0.21-1.109-0.417-2.157-0.585-3.125c-0.229-1.324-2.037-2.236-2.195-3.23   c-0.244-1.531-0.85-2.94-0.619-3.794c0.021-0.078,0.05-0.151,0.086-0.219c-0.158,0.054-0.321,0.104-0.456,0.171   c-0.069,0.035-0.122,0.077-0.186,0.115c-0.509,0.302-0.849,0.678-1.043,0.999c-0.764,1.257-0.413,2.653-0.073,4.002   c0.119,0.468,0.24,0.951,0.315,1.416c0.173,1.087,0.913,1.85,1.51,2.465c0.237,0.244,0.634,0.653,0.69,0.792   c0.116,0.674,0.252,1.381,0.394,2.123l0.244,1.285c-0.035,0.171-0.175,0.525-0.273,0.768c-0.34,0.854-0.765,1.914-0.521,3.119   c0.235,1.186,1.073,1.965,1.747,2.593c0.188,0.173,0.452,0.421,0.588,0.582c-0.044,0.194-0.156,0.509-0.237,0.733   c-0.281,0.789-0.618,1.758-0.442,2.835c0.013,0.075,0.021,0.149,0.038,0.226C100.377,115.636,100.649,116.276,100.898,116.851z    M161.076,270.117l3.075,1.293l2.809-1.802l-0.278,3.323l2.58,2.113l-3.246,0.764l-1.213,3.107l-1.729-2.852l-3.33-0.193   l2.179-2.525L161.076,270.117z M141.717,241.36l3.317,0.347l2.167-2.537l0.695,3.263l3.082,1.276l-2.888,1.67l-0.262,3.325   l-2.481-2.229l-3.243,0.779l1.355-3.049L141.717,241.36z M150.132,208.377l-0.169,1.411l-0.444,3.714l-3.696-3.604l-5.064,1   l2.286-4.629l-2.517-4.508l5.107,0.744l3.51-3.786l0.136,0.792l0.736,4.296l4.684,2.166L150.132,208.377z M125.315,166.841   l0.015,0.034l4.563,0.973l-3.549,3.031l0.484,4.643l-3.918-2.401l-0.063-0.038l-2.2,0.977l-2.065,0.917l1.091-4.537l-3.12-3.472   l1.636-0.128l3.016-0.237l2.339-4.04L125.315,166.841z M100.94,233.63l3.317,0.347l2.167-2.537l0.695,3.263l3.082,1.276   l-2.888,1.67l-0.262,3.325l-2.48-2.229l-3.243,0.779l1.354-3.049L100.94,233.63z M94.292,194.256l0.293-0.168l0.184-0.105   l2.416-1.388l0.271-3.325l2.475,2.237l3.245-0.77l-1.362,3.044l1.735,2.85l-3.316-0.355l-2.173,2.531l-0.688-3.264l-2.525-1.054   l-0.279-0.117L94.292,194.256z M88.017,125.808l0.271-3.325l2.475,2.237l3.245-0.771l-1.362,3.044l1.735,2.85l-3.316-0.355   l-2.173,2.531l-0.688-3.264l-3.079-1.285L88.017,125.808z M61.185,145.187l-4.021-1.719l-3.693,2.339l0.391-4.354l-3.365-2.79   l4.262-0.974l1.614-4.064l2.244,3.753l4.362,0.279l-2.876,3.293L61.185,145.187z M80.935,266.135l-2.173,2.53l-0.688-3.264   l-3.079-1.285l2.893-1.662l0.271-3.324l2.475,2.236l3.245-0.77l-1.362,3.044l1.735,2.849L80.935,266.135z M169.706,131.838   l-1.713-1.54l-0.767-0.69l-3.243,0.779l1.355-3.049l-1.743-2.844l3.317,0.346l2.167-2.536l0.695,3.263l3.082,1.275l-2.888,1.67   l-0.099,1.254L169.706,131.838z M191.325,138.954l-3.012,3.508l-0.952-4.525l-4.268-1.78l4.009-2.304l0.375-4.608l3.43,3.101   l4.498-1.068l-1.888,4.221l2.405,3.948L191.325,138.954z"/></g>,
  warrior: <g style={{ transform: 'translate(-86.922px,-153.77125px)' }}><path d="M52.145,11.244l-1.974,1.535c-1.143,0.889,2.077,7.092,4.432,11.262c1.248-2.902,3.046-5.513,5.263-7.701   C56.685,13.445,53.072,10.521,52.145,11.244z"/><path d="M103.065,12.779l-1.974-1.535c-0.9-0.701-4.331,2.033-7.44,4.843c2.197,2.106,3.999,4.617,5.284,7.416   C101.252,19.356,104.16,13.63,103.065,12.779z"/><path d="M40.65,232.634c-0.571,6.805,4.482,12.785,11.284,13.355c6.805,0.572,12.786-4.48,13.357-11.283l6.293-74.879   c-8.521-3.85-16.74-7.633-23.893-10.984L40.65,232.634z"/><path d="M87.944,234.707c0.571,6.803,6.553,11.855,13.357,11.283c6.802-0.57,11.855-6.551,11.284-13.355l-4.783-56.908   c-8.019-3.389-16.881-7.254-25.758-11.207L87.944,234.707z"/><path d="M137.745,87.058c-1.929-0.272-3.896-0.42-5.899-0.42c-4.35,0-8.546,0.66-12.491,1.889   c-5.893,1.832-11.228,4.93-15.69,8.971c-2.83,2.564-5.301,5.512-7.348,8.754c-4.092,6.482-6.469,14.152-6.469,22.385   c0,8.734,2.669,16.846,7.232,23.566c2.62,3.857,5.865,7.256,9.591,10.051c7.015,5.262,15.731,8.381,25.175,8.381   c23.195,0,41.998-18.803,41.998-41.998C173.844,107.443,158.145,89.927,137.745,87.058z M131.846,161.97   c-10.679,0-20.178-5.027-26.278-12.84c-0.741-0.949-1.435-1.936-2.071-2.963c-3.156-5.094-4.983-11.098-4.983-17.531   c0-5.514,1.347-10.709,3.717-15.289c0.443-0.857,0.921-1.691,1.435-2.504c4.65-7.35,12.092-12.75,20.838-14.719   c2.364-0.531,4.819-0.82,7.344-0.82c3.773,0,7.394,0.635,10.775,1.789c13.119,4.482,22.558,16.906,22.558,31.543   C165.179,147.046,150.255,161.97,131.846,161.97z"/><path d="M131.846,108.636c-0.688,0-1.366,0.035-2.035,0.102c-10.09,1.021-17.965,9.539-17.965,19.898c0,11.047,8.954,20,20,20   c1.156,0,2.283-0.119,3.386-0.309c7.063-1.207,12.849-6.105,15.314-12.65c0.827-2.193,1.3-4.559,1.3-7.041   c0-4.18-1.286-8.059-3.479-11.268C144.765,112.099,138.712,108.636,131.846,108.636z"/><path d="M91.714,59.754c3.286-2.97,5.733-6.933,6.813-11.572c0.731-3.14,0.76-6.277,0.199-9.254   c-4.142,4.021-13.015,5.877-21.835,5.877c-9.153,0-18.363-1.997-22.283-6.34c-1.695,8.074,1.177,16.087,6.911,21.289   c2.742,2.488,6.136,4.335,9.998,5.234C78.977,66.726,86.431,64.527,91.714,59.754z"/><path d="M61.326,17.693c-2.423,2.373-4.303,5.295-5.443,8.565c-0.653,1.872-1.063,3.856-1.192,5.918   c-0.029,0.467-0.049,0.936-0.049,1.41c0,0.861,0.226,1.66,0.632,2.4c4.88,8.888,36.818,9.08,42.873,0.579   c0.639-0.897,0.995-1.889,0.995-2.979c0-0.035-0.003-0.069-0.003-0.104c-0.013-2.746-0.524-5.373-1.447-7.799   c-1.2-3.157-3.098-5.968-5.506-8.248c-2.806-2.658-6.303-4.592-10.194-5.505c-0.114-0.699-0.236-1.412-0.365-2.127   C80.736,4.898,79.51,0,78.155,0h-3.071c-1.366,0-2.602,4.98-3.492,9.927c-0.13,0.721-0.251,1.438-0.365,2.141   C67.435,13.063,64.043,15.033,61.326,17.693z"/><path d="M4.996,117.13c-1.819-0.486-3.779,0.373-4.615,2.133c-0.906,1.918-0.138,4.18,1.701,5.178   C2.998,121.966,3.967,119.529,4.996,117.13z"/><path d="M81.071,152.933c-0.425-0.213-0.851-0.426-1.276-0.637c-2.418-1.205-4.847-2.41-7.273-3.607   c-7.827-3.859-15.627-7.641-22.949-11.121c-0.3-0.143-0.598-0.283-0.896-0.426c-0.34-0.16-0.682-0.322-1.02-0.482   c-6.367-3.012-11.786-5.311-16.244-6.975l4.097-8.649c0.71-1.498,0.069-3.291-1.43-3.998c-1.501-0.709-3.29-0.07-4.001,1.428   l-4.057,8.568c-0.075-0.045-0.145-0.1-0.225-0.137l-2.68-1.27c-0.992,2.342-1.94,4.717-2.809,7.145   c-0.033,0.092-0.073,0.18-0.109,0.27l2.193,1.039c0.085,0.039,0.168,0.057,0.251,0.09l-4.055,8.566   c-0.708,1.498-0.07,3.291,1.431,4.002c1.499,0.707,3.29,0.068,3.998-1.432l4.094-8.648c4.111,2.393,9.324,5.129,15.69,8.143   c1.337,0.633,2.696,1.273,4.069,1.918c0.811,0.381,1.627,0.764,2.448,1.146c3.119,1.459,6.313,2.939,9.551,4.43   c3.921,1.803,7.903,3.619,11.893,5.422c3.372,1.523,6.746,3.037,10.092,4.527c9.039,4.023,17.854,7.863,25.758,11.211   c17.935,7.596,31.175,12.656,31.688,11.57c0.546-1.156-13.37-9.02-32.304-18.889C99.012,161.976,90.135,157.457,81.071,152.933z"/><path d="M22.439,90.345c-0.004,0.006-0.008,0.01-0.012,0.016c-5.171,7.098-10.313,15.629-14.807,25.719   c-0.269,0.604-0.532,1.221-0.797,1.836c-1.022,2.381-2.007,4.848-2.948,7.398c-0.171,0.463-0.345,0.922-0.513,1.391   c-0.061,0.168-0.105,0.338-0.154,0.508c-1.148,4.018,0.996,8.291,4.988,9.723c0.891,0.318,1.801,0.471,2.696,0.471   c2.602,0,5.06-1.295,6.557-3.451c0.375-0.541,0.699-1.125,0.938-1.77c0.011-0.029,0.027-0.055,0.038-0.084   c0.911-2.543,1.87-4.986,2.866-7.336c0.263-0.619,0.529-1.23,0.797-1.836c4.044-9.15,8.655-16.805,13.26-23.133   c0.004-0.006,0.008-0.012,0.012-0.016c0.27-0.369,0.493-0.758,0.69-1.152c0.028,0.035,0.059,0.07,0.087,0.107   c4.729-6.346,9.418-11.303,13.434-15.014v42.76l-0.717,8.533c0.236,0.111,0.478,0.227,0.717,0.34   c7.338,3.48,15.204,7.289,23.129,11.195c2.727,1.344,5.456,2.695,8.175,4.051c1.134,0.564,2.265,1.131,3.392,1.695   c6.457,3.232,12.784,6.447,18.724,9.512c-3.168-2.76-5.937-5.961-8.211-9.512c-4.381-6.838-6.933-14.955-6.933-23.66   c0-8.506,2.434-16.451,6.63-23.189c2.487-3.992,5.593-7.561,9.187-10.566V77.354c3.295,1.135,7.339,3.136,11.357,6.695   c0.966,0.855,1.938,1.806,2.908,2.857c4.377-1.463,9.053-2.268,13.915-2.268c1.542,0,3.065,0.08,4.566,0.236   c-6.257-9.844-13.795-16.067-20.663-19.664c-8.341-4.409-15.445-5.18-18.336-5.312c-0.479-0.093-0.971-0.145-1.477-0.145h-1.347   c-0.128,0.138-0.264,0.268-0.395,0.402c-1.47,1.518-3.129,2.836-4.939,3.924c-3.705,2.227-8.022,3.5-12.615,3.5   c-1.865,0-3.741-0.216-5.574-0.644c-2.46-0.573-4.771-1.51-6.887-2.753c-1.892-1.111-3.618-2.478-5.148-4.063   c-0.118-0.123-0.241-0.241-0.358-0.366h-1.371c-1.172,0-2.279,0.269-3.274,0.735c-0.282,0.117-0.562,0.247-0.835,0.4l-0.002-0.002   c-0.691,0.393-15.219,8.622-29.893,28.303c0.041,0.016,0.084,0.031,0.126,0.049C23.068,89.572,22.737,89.939,22.439,90.345z"/></g>,
}

interface IProps {
  unitType: IUnitType
}

export default class UnitGlyph extends React.Component<IProps, {}> {
  shouldComponentUpdate(nextProps: IProps) {
    return this.props.unitType !== nextProps.unitType
  }

  render() {
    return unitGlyphs[this.props.unitType.name.toLowerCase()]
  }
}
