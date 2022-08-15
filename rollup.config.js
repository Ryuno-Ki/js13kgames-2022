import license from 'rollup-plugin-license'
import { terser } from 'rollup-plugin-terser'

const LICENSE_HEADER = `This file is part of JS13kGames - DEATH.
Copyright (C) 2022  André Jaenisch

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published
by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.`

const plugins = process.env.NODE_ENV === 'development'
  ? []
  : [ terser(), license({ banner: LICENSE_HEADER }) ];

const client = {
  input: './src/js/client/app.js',
  output: {
    file: './public/client.js',
    format: 'iife',
    name: 'ldtd',
  },
  plugins,
};

export default [client];
