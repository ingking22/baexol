"""BAEXOL API — FastAPI application factory (composition root).

헥사고날 아키텍처의 '조립 지점'. 여기서만 구체 어댑터(outbound)를 포트에 주입하고,
inbound 어댑터(HTTP 라우터)를 앱에 장착한다. 도메인/애플리케이션 계층은
프레임워크(FastAPI)나 인프라(DB 등)를 전혀 알지 못한다.
"""

from __future__ import annotations

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from baexol_api.adapters.inbound.http.routers import health, projects
from baexol_api.adapters.outbound.repositories.in_memory_project_repository import (
    InMemoryProjectRepository,
)
from baexol_api.application.use_cases.list_projects import ListProjects


def create_app() -> FastAPI:
    app = FastAPI(
        title="BAEXOL API",
        version="0.1.0",
        description="Portfolio backend — Hexagonal Architecture (ports & adapters).",
    )

    app.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],  # TODO: 배포 시 https://baexol.dev 로 제한
        allow_methods=["*"],
        allow_headers=["*"],
    )

    # ── Composition root: outbound 어댑터를 포트에 주입 ──
    project_repository = InMemoryProjectRepository()
    list_projects = ListProjects(repository=project_repository)

    # inbound 어댑터(라우터) 장착
    app.include_router(health.router)
    app.include_router(projects.create_router(list_projects))

    return app


app = create_app()
