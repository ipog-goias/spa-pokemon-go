# SpaPokemonGo

## Exercício
Criar um projeto chamado spa-pokemon-go

```shell
ng new spa-pokemon-go
```

Este projeto deverá seguir a seguinte estrutura:
Módulos:
1. core (m)
```shell
ng g m core
```
2. shared (m)
```shell
ng g m shared
```

3. pokemon (m)
```shell
ng g m pokemon --routing
```
3.1 pokemon-list (c)
```shell
ng g c pokemon/pokemon-list
```
3.2 pokemon-detail (c)
```shell
ng g c pokemon/pokemon-detail
```

4. location-area (m)
```shell
ng g m location-area --routing
```
4.1.location-area-detail (c)
```shell
ng g c location-area/location-area-detail
```
4.2 location-area-list (c)
```shell
ng g c location-area/location-area-list
```

Configurar a estrutura de roteamento para acessar os respectivos componentes.(list e detail)

